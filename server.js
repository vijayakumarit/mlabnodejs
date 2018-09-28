const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

//Import models
User = require("./models/users");

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database vijay
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database......");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "hello"});
});

app.get('/getUser', (req, res) => {
    User.getUsers(function(err, data){

		if(err){
			throw err;
		}
		res.json(data);
	});
});
app.post('/addUser', (req, res) => {
    User.addUser(req.body, function(err, data){
		if(err)
		{
			throw err;
		}
		res.json(data);
	})
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
