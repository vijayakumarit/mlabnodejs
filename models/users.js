var mongoose = require('mongoose');

// User Schema

var userSchema = mongoose.Schema({

	title:{
		type : String,
		required : true
	},
	gender:{
		type : String,
		required : true
	},
	name:{
		type : String,
		required : true
	},
	
	created_date:{
		type : Date,
		default : Date.now
	}
});

var User = module.exports = mongoose.model('User', userSchema);

// Get Users

module.exports.getUsers = function(callback, limit){

	User.find(callback).limit(limit);

}

//Get user by id

module.exports.getUserById = function(id, callback){

	User.findById(id, callback);

}

// Add user

module.exports.addUser = function(user, callback){

	User.create(user, callback);
}

//update user

module.exports.updateUsers = (id, user, options, callback) => {
	var query = {_id: id};
	var update = {
		title: user.title,
		gender: user.gender,
		name : user.name
	}
	User.findOneAndUpdate(query, update, options, callback);
}