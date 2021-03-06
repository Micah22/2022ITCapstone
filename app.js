const express = require('express');
let app = express();
const session = require("express-session");


// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

// ADDING STATIC FILE (CONTAINS IMAGES, CSS, ETC)
app.use(express.static(__dirname + '/public'));

// SETTING UP BODY PARSER 
app.use(express.urlencoded({}))

// database setup
require("./models/db");


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

// DISPLAY LOGIN PROMPT 
app.get("/login", function (req, res) {
	res.render("login", { layout: 'login' });
});

app.get("/register", function (req, res) {
	res.render("register", { layout: 'login' });
});

// Handle the login action
app.post("/login", async function (req, res) {
	req.session.user = req.body.username;
	password = req.body.password;
	res.redirect("/dashboard");
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

// IMPORT THE CONTROLLER(S)
const studentController = require('./controllers/studentController');
// const { compare } = require('bcrypt');

app.get('/dashboard', studentController.dashboardRoute);
app.get('/multitask', studentController.multitaskRoute);
app.get('/zoom', studentController.zoomRoute);
app.get('/files', studentController.filesRoute);
app.get('/addCourse', studentController.addCourseRoute);
app.get('/newCourse', studentController.addCourseRoute);

app.get('/:courseCode', studentController.classRoute);


// const Chat = require('./models/chatDB')
// app.post('/new', (req, res) => {
// 	var 
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
