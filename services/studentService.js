const mongoose = require("mongoose");
require("../models/studentDB");
require("../models/secureDB");
const Student = mongoose.model("Student")
const Secure = mongoose.model("Secure")

const studentService = {
    isStudentInDatabase: async (userUsername, userPassword) => {
        return Secure.find({
            $and: [
                { username: userUsername },
                { password: userPassword }
            ],
        }).lean()

    },
    getClassesByStudentId: async (Username) => {
        return Student.find({ username: Username }).lean()
    }

}

module.exports = studentService

