const Attendance = require('../models/attendance');
const Employee = require('../models/employee');
const moment = require('moment');

module.exports = {
  addEmployee: async (req, res) => {
    console.log('incomming', req.body);
    try {
      const {
        employeeId,
        name,
        dob,
        mobileNo,
        joiningDate,
        salary,
        address,
        designation,
      } = req.body;

      //check if Employee already exist
      const isExist = await Employee.findOne({employeeId});
      if (isExist) {
        return res.status(409).send('Employee Already Exists!');
      }

      //create new Employee
      const newEmployee = new Employee({
        employeeId: employeeId,
        employeeName: name,
        designation: designation,
        joiningDate: joiningDate,
        dateOfBirth: dob,
        salary: salary,
        activeEmployee: true,
        phoneNumber: mobileNo,
        address: address,
      });
      await newEmployee.save();

      //   send response back to the client side
      return res
        .status(201)
        .json({message: 'Employee added successfully', employee: newEmployee});
    } catch (error) {
      console.error('Error creating an Employee:', error.message);
      res.status(500).json({message: 'Failed to create an Employee'});
    }
  },
  getAllEmployees: async (req, res) => {
    try {
      const employees = await Employee.find({});
      res.status(200).json(employees);
    } catch (error) {
      console.error('Error retrieving employees:', error.message);
      res.status(500).json({message: 'Failed to retrieve employees'});
    }
  },

  // endpoint to mark attendance
  markAttendance: async (req, res) => {
    console.log(req.body)
    try {
      const {employeeId, employeeName, date, status} = req.body;

      const existingAttendance = await Attendance.findOne({employeeId, date});
      if (existingAttendance) {
        existingAttendance.status = status;
        await existingAttendance.save();
        res.status(200).json(existingAttendance);
      } else {
        const newAttendance = new Attendance({
          employeeId,
          employeeName,
          date,
          status,
        });
        await newAttendance.save();
        res.status(200).json({newAttendance});
      }
    } catch (error) {
      res.status(500).json({message: 'Error submitting Attendance'});
      console.log(error)
    }
  },

  // endpoint to getting the attendance of a particular date

  getAttendance: async (req, res) => {
    try {
      const {date} = req.query;
      const attendanceData = await Attendance.find({date: date});
      res.status(200).json(attendanceData);
    } catch (error) {
      res.status(500).json({message: 'Error fetching Attendance'});
    }
  },

  //endpoint to get attendance report

  allEmpAttendanceReport: async (req, res) => {
    try {
      const {month, year} = req.query;
      console.log('query params', month, year);
      //install moment package for startDate and endDate
      const startDate = moment(`${year}-${month}-01`, "YYYY-MM-DD")
        .startOf("month")
        .toDate();
      const endDate = moment(startDate).endOf("month").toDate();

      // aggregate attendance data using aggregation pipeline of mongoDb database
      const report = await Attendance.aggregate([
        {
          $match: {
            $expr: {
              $and: [
                {
                  $eq: [
                    {
                      $month: {$dateFromString: {dateString: '$date'}},
                    },
                    parseInt(req.query.month),
                  ],
                },
                {
                  $eq: [
                    {
                      $year: {$dateFromString: {dateString: '$date'}},
                    },
                    parseInt(req.query.year),
                  ],
                },
              ],
            },
          },
        },
        {
          $group: {
            _id: '$employeeId',
            present: {
              $sum: {
                $cond: {if: {$eq: ['status', 'present']}, then: 1, else: 0},
              },
            },
            absent: {
              $sum: {
                $cond: {if: {$eq: ['status', 'absent']}, then: 1, else: 0},
              },
            },
            holiday: {
              $sum: {
                $cond: {if: {$eq: ['status', 'holiday']}, then: 1, else: 0},
              },
            },
          },
        },
        {
          $lookup: {
            from: 'employees',
            localField: '_id',
            foreignField: 'employeeId',
            as: 'employeeDetails',
          },
        },
        {
          $unwind: '$employeeDetails',
        },
        {
          $project: {
            _id: 1,
            present: 1,
            absent: 1,
            halfday: 1,
            name: '$employeeDetails.employeeName',
            designation: '$employeeDetails.designation',
            salary: '$employeeDetails.salary',
            employeeId: '$employeeDetails.employeeId',
          },
        },
       
      ])
      res.status(200).json(report);
     
    } catch (error) {
      res.status(500).json({message: 'Error fetching summary report'});
      console.log(error)
    }
  },
};
