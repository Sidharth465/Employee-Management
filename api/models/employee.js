const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true, // Change 'require' to 'required'
    unique: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: String,
    required: true,
  },
  dateOfBirth:{
    type:String,
    required:true, // Change 'require' to 'required'
  },
  salary:{
    type:Number,
    required:true, // Change 'requre' to 'required'
  },
  activeEmployee:{
    type : Boolean ,
    required:true, // Change 'require' to 'required'
  },
  phoneNumber:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
},{timestamps:true});

const Employee = mongoose.model("Employee",employeeSchema)
module.exports  = Employee;
