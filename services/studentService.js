const mongoose = require("mongoose");
require("../models/student");
const Student = mongoose.model("Student")

const studentService = {
    getClassesByStudent: async (username) => {
        return Student.find({username:username}).lean()
    }

}

module.exports = studentService