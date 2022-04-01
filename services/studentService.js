const mongoose = require("mongoose");
require("../models/student");
const Student = mongoose.model("Student")

const studentService = {
    isStudentInDatabase: (username, password) => {
        return Student.find({username: username} && { password: password }).lean()
    },
    getClassesByStudent: async (username) => {
        return Student.find({ username: username }).lean()
    }

}

module.exports = studentService