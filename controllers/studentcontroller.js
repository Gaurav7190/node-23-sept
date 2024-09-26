const Student = require('../models/Student');
async function addStudent(req, res) {
    try {
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.end("<h1> Data has been inserted sucessfully..<h1>")
    } catch (err) {
        console.log(err)
    }
}

async function getStudents(req, res) {
    try {
        let students = await Student.find({});
        res.render('studentlist', {
            students: students
        })
    } catch (err) {
        console.log(err.message)
    }
}
async function getPageForEditStudent(req, res) {
    try {
        let id = req.params.id;
        let student = await Student.findOne({ _id: id });
        console.log(student);
        res.render('studentforedit', {
            student: student
        })

    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    addStudent,
    getStudents,
    getPageForEditStudent
}