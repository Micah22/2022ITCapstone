const studentService = require('../services/studentService')

const studentController = {
    dashboardRoute: async function (req, res) {
        const user = await studentService.isUserInDatabase(req.session.user, password)
        console.log(user)
        console.log("-----------------------------------------")
        if (user.length > 0) {
            const valid = await studentService.getStudentClassesByUsername(req.session.user)
            if (valid.length > 0) {
                console.log(valid)
                res.render('dashboard', {
                    route: req.params.route,
                    username: req.session.user,
                    student: valid
                })
            } else {
                const valid = await studentService.getTeacherClassesByUsername(req.session.user)
                console.log(valid)
                res.render('teacherDashboard', {
                    route: req.params.route,
                    username: req.session.user,
                    student: valid
                })
            }
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