const studentService = require('../services/studentService')

const studentController = {
    dashboardRoute: async function (req, res) {
        const user = await studentService.isUserInDatabase(req.session.user, password)
        console.log(user)
        console.log("-----------------------------------------")
        if (user.length > 0) {
            const valid = await studentService.getStudentClassesByUsername(req.session.user)
            if (valid.length > 0) {
                // console.log(valid)
                res.render('dashboard', {
                    route: req.params.route,
                    username: req.session.user,
                    student: valid
                })
            } else {
                const valid = await studentService.getTeacherClassesByUsername(req.session.user)
                // console.log(valid)
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
    classRoute: function (req, res) {
        courses = [
            'COP3813', 'CTS4457', 'CTS4911',
            'STA2023', 'COP2253', 'CGS2570',
            'COP2830', 'CET4772', 'MAC1140',
            'CGS3763'
        ]
        if (courses.includes(req.params.courseCode)) {
            // res.render('class')
            res.render('class', {
                route: req.params.route,
                username: req.session.user
            })

        } else {
            res.render('class', {
                route: req.params.route,
                username: req.session.user
            })
        }
    },
    multitaskRoute: function (req, res) {
        res.render('multitask')
    },
    addCourseRoute: function (req, res) {
        res.render('addCourse')
    },
    addCourse: async (req, res) => {
        try {
            const newCourse = req.body
            if (newCourse.name && newCourse.zip) {
                const AllCourses = await studentService.addNewCourse(newCourse)
                res.json({
                    status: 'success',
                    data: AllCourses
                })
            } else {
                res.status(400);
                res.json({
                    status: 'fail',
                    data: 'This is not a valid course'
                });
            }
        } catch (err) {
            res.json({
                status: 'error',
                data: err.message || 'an error occurred'
            });
        }
    },
    zoomRoute: function (req, res) {
        res.render('zoom')
    },
    filesRoute: function (req, res) {
        res.render('files')
    }
}

module.exports = studentController