const mongoose = require("mongoose");
require("../models/student");
const Student = mongoose.model("Student")

const studentService = {
    getClassesByStudent: async (username, password) => {
        // return Student.find({ studendentId: user }).lean()

        return Student.find({
            $and: [
                // { studentId: Number(input) },
                // { name: input },
                { 'login.username': username },
                { 'login.password': password }
            ],
        }).lean()
    }

}

module.exports = studentService

