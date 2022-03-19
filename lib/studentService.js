const studentData = require('../data/students.json')

const studentService = {
    getAllStudents: () => {
        return studentData
    },

    getClassesByStudent: () => {
        const courses = studentData.filter( (student) => {
            return student.name === "Micah"
        })
        return courses
    }
}

module.exports = studentService