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
	age:{
		type : Number
	},
	email:{
		type: String
	},
	image_url:{
		type : String
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


