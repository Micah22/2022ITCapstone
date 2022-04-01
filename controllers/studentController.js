const studentService = require('../services/studentService')

const studentController = {
    loginRoute: function (req, res) {
        res.render('login')
    },
    dashboardRoute: async function(req, res) {
        const student = await studentService.getClassesByStudent(req.session.user)
        console.log(student)

        res.render('dashboard', {
            route: req.params.route,
			username: req.session.user,
			student: student
        })
    },
    multitaskRoute: function(req, res) {
        res.render('multitask')
    }
}

module.exports = studentController