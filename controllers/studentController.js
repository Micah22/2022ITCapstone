const studentService = require('../services/studentService')

const studentController = {
    dashboardRoute: async function (req, res) {
        const student = await studentService.getClassesByStudent(req.session.user, password)
        console.log(student)
        if (student.length > 0) {
            res.render('dashboard', {
                route: req.params.route,
                username: req.session.user,
                student: student
            })
        } else {
            res.redirect('/login')
        }
    },
    multitaskRoute: function (req, res) {
        res.render('multitask')
    }
}

module.exports = studentController