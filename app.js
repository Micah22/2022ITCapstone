const express = require('express');

let app = express();

// Import controllers
const trainerController = require('./controllers/trainers');

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

// Lists all pokemon types
app.get('/', function(req, res) {
	res.render('home');
});

// Gets trainers by pokemon type
app.get('/trainers/:type', trainerController.listTrainers);

// Show a sign-up form for a specific trainer
app.get('/trainers/invite/:trainerId', trainerController.trainerForm);

// Handle the form submission
app.post('/trainers/invite/:trainerId', trainerController.processTrainerForm);

app.get('/thanks', (req, res) => {
	res.render('thanks');
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
