const express = require('express');
const studentService = require('./lib/studentService')
let app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql')
const session = require("express-session");

require('dotenv').config()

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

// SETTING UP BODY PARSER 
app.use(bodyParser.urlencoded({ extended: true }))

// Set up cookie parser and sessions
const COOKIE_SECRET = "keyboard cat"; // My secret to secure cookies
app.use(require("cookie-parser")(COOKIE_SECRET)); // Parse incoming cookies

// Set up session for the user, based on cookies
app.use(
	session({
		secret: COOKIE_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);

// PARSE APPLICATION/JSON
app.use(bodyParser.json())

// ADDING STATIC FILE (CONTAINS IMAGES, CSS, ETC)
app.use(express.static(__dirname + '/public'));



// DISPLAY LOGIN PROMPT 
app.get("/login", function (req, res) {
	res.render("login", { layout: 'login' });
});

// Handle the login action
app.post("/login", function (req, res) {
	req.session.user = req.body.username; // Set the username
	res.redirect("/Dashboard");
});

// Middleware that will enforce logins for all subsequent routes
app.use(function (req, res, next) {
	// If they are logged in (have a user object set)
	if (req.session.user) {
		next()

		// Otherwise ask them to log in
	} else {
		res.render("login", {
			layout: 'login',
			error: "You need to log in!",
		});
	}
});




app.get('/:route', function (req, res) {
	// studentService.getClassesByStudent(req.session.user)
	const student = studentService.getClassesByStudent(req.session.user)
	

	if (req.params.route === 'Dashboard') {
		res.render('dashboard', {
			route: req.params.route,
			username: req.session.user,
			student: student
		});
	} else if (req.params.route === 'Multitask') {
		res.render('multitask', {
			route: req.params.route,
			username: req.session.user,
			student: student
		});
	}
});


// app.get('/multitask', function (req, res) {
// 	res.render('multitask')
// })






// 404 catch-all handler (middleware)
app.use(function (req, res, next) {
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function () {
	console.log('Express started on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.');
});
