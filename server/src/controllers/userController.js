const User = require("../models/userModel.js")
const bcrypt = require("bcrypt");
//const jwt = require('jsonwebtoken')
//const expressJwt = require('express-jwt')
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const salt = 10

// Route for signing up a new user
exports.user_signup = (req, res) => {
	const body = req.body;
	const password = body.password
	
	// Hash the password before pushing the user onto the database
	bcrypt.hash(password, salt).then(async (hash) => {
		console.log(hash)
		body.password = hash
		
		const user = new User(body);
		console.log(user.password)
		user.save((err, user) => {
			if (err) {
				return res.status(400).json({
					error: "Unable to add user"
				})
			}
			
			return res.json({
				message: "Success",
				user
			})
		})
	})
	
	
}

// Route for signing in as a new user
exports.user_signin = (req, res) => {
	const username = req.body.username
	const password = req.body.password
	
	if (!username || !password) {
		return res.status(400).json({
			message: "Username or password not present"
		})
	}
	
	User.findOne({username: username }, function (err, docs) {
		if (err){
			console.log(err)
		}
		else{
			console.log("Result : ", docs)
			console.log(password)
			bcrypt.compare(password, docs.password, (error, result) => {
				if(result) {
					res.status(200).json({ message: "Login successful"}) 
					console.log("Login Successful")
				} else {
					res.status(400).json({ message: "Login not successful, incorrect password "})
					console.log("Login Unsuccessful, Incorrect username or password")
				} 
			})
		}
	});
}

	