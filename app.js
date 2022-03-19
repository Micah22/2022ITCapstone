const express = require('express');
const studentService = require('./lib/studentService')
let app = express();

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

	const student = studentService.getClassesByStudent()
	
	res.render('dashboard.handlebars', {
		student: student
	});
});


app.get('/collab', function(req, res) {
	res.render('collab')
})


app.get('/collab', function(req, res) {
	res.render('collab')
})


app.get('/collab', function(req, res) {
	res.render('collab')
})





// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
