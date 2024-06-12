const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { teachermodel } = require("./models/teacher")

mongoose.connect("mongodb+srv://salmanshan:salman642001@cluster0.odxej1b.mongodb.net/TeacherDB?retryWrites=true&w=majority&appName=Cluster0")


const app = express()
app.use(cors())
app.use(express.json())

app.post("/",
    (req, res) => {
        const input = req.body
       let teacher= new teachermodel(input)
       console.log(teacher)
       teacher.save()
        res.json({"status":"success"})
    }
)



app.listen(1003,()=>{
    console.log("server running")
})
