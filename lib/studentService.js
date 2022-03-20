const req = require('express/lib/request')
const studentData = require('../data/students.json')

const studentService = {
    getAllStudents: () => {
        return studentData
    },

    getClassesByStudent: (username) => {
        // FILTER JSON BY STUDENT NAME 
        const courses = studentData.filter((student) => {
            return student.name === username
        })
        // RETURN CLASSES THAT ARE RELATED TO THE USERNAME ENTERED
        return courses
    }

}

module.exports = studentService