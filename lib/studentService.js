const req = require('express/lib/request')
const studentData = require('../data/students.json')

const studentService = {
    getAllStudents: () => {
        return studentData
    },

    getClassesByStudent: (username) => {
        const courses = studentData.filter( (student) => {
            return student.name === username
        })
        return courses
    }
}

module.exports = studentService