const mongoose = require("mongoose");
require("../models/student");
const Student = mongoose.model("Student")

const studentService = {
    isStudentInDatabase: async (username, password) => {
        // return Student.find({username: username}).lean()
        return Student.find({ username: username } && { password: password })

    },
    getClassesByStudent: async (username) => {
        return Student.find({ username: username }).lean()
    }

}

module.exports = studentService

