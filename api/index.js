const express = require('express')
const bodyParser = require('body-parser')
const mongoose  = require('mongoose')

const app = express();
const port = 5000;

const cors = require('cors')
app.use(cors())


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://siddharthverma465:7529269@cluster0.lxmldxc.mongodb.net/Employee-Manage",{
// mongoose.connect("mongodb://127.0.0.1:27017",{
    
}).then(()=>console.log("MongoDB Connected Successfully")).catch((error)=>console.log("error connecting to MongoDb",error))


const { addEmployee } = require("./Controller/EmployeeController");
const { getAllEmployees } = require("./Controller/EmployeeController");
const { markAttendance } = require("./Controller/EmployeeController");
const { getAttendance } = require("./Controller/EmployeeController");
const { allEmpAttendanceReport } = require("./Controller/EmployeeController");


//end Points


app.post('/addEmployee',addEmployee)
app.get('/employees',getAllEmployees)
app.post('/markAttendance',markAttendance);
app.get('/getAttendance',getAttendance);
app.get('/attendanceReport',allEmpAttendanceReport)



app.listen(port,()=>{console.log("server is running on port 5000")})