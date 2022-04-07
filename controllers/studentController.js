const studentService = require('../services/studentService')

const studentController = {
    dashboardRoute: async function (req, res) {
        const student = await studentService.isStudentInDatabase(req.session.user, password)
        console.log(student)
        console.log("-----------------------------------------")
        if (student.length > 0) {
            const valid = await studentService.getClassesByStudentId(req.session.user)
            console.log(valid)
            res.render('dashboard', {
                route: req.params.route,
                username: req.session.user,
                student: valid
            })
        } else {
            res.render('login', {
                layout: 'loginError',
                error: "The username and/or password is incorrrect. Try again!"
            })
        }
    },
    multitaskRoute: function (req, res) {
        res.render('multitask')
    }
}

module.exports = studentController