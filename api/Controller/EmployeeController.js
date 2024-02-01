const Attendance = require('../models/attendance');
const Employee = require('../models/employee');

module.exports = {
  addEmployee: async (req, res) => {
    console.log("incomming",req.body)
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
      } = (req.body);
      

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
};
