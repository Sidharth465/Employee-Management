const mongoose = require('mongoose')

const attendanceSchema =  new mongoose.Schema({
    employeeId:{
        type:String,
        required:true
    },
    employeeName:{
        type:String,
        requied:true

    },
    data:{
        type:String,
        required:true
    },
status:{
    type : String,
    require:true
}
}
)

const Attendance = mongoose.model("Attendance",attendanceSchema)
module.exports  = Attendance;