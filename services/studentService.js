const mongoose = require("mongoose");
require("../models/studentDB");
require("../models/secureDB");
require("../models/teacherDB");
require("../models/adminDB");
const Student = mongoose.model("Student")
const Teacher = mongoose.model("Teacher")
const Admin = mongoose.model("Admin")
const Secure = mongoose.model("Secure")

const studentService = {
    isUserInDatabase: async (userUsername, userPassword) => {
        return Secure.find({
            $and: [
                { username: userUsername },
                { password: userPassword }
            ],
        }).lean()

    },
    getStudentClassesByUsername: async (Username) => {
        return Student.find({ username: Username }).lean()
    },
    getTeacherClassesByUsername: async (Username) => {
        return Teacher.find({ username: Username }).lean()
    },
    getAdminByUsername: async (Username) => {
        return Admin.find({ username: Username }).lean()
    }

}

module.exports = studentService

