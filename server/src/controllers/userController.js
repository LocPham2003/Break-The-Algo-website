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
	const username = req.body.username
	const password = body.password
	const passwordReEntry = body.passwordReEntry

	if (!body.name || !body.studyMajor || !body.studyYear || !username || !password) {
		return res.status(400).json({
			message: "Please make sure you have fully filled in all necessary information"
		})
	} else {
		if (containsSpecialChars(username) || containsWhiteSpace(username)) {
			return res.status(400).json({
				message: "Username must not contain whitespaces or special characters"
			})
		} else {
			User.findOne({username: username }, function (err, docs) {
				if (err){
					console.log("Something happened")
				} else {
					if (docs === null) {
						
						if (passwordReEntry != password) {
							return res.status(400).json({
								message: "Password does not match, please check again"
							})	
						} else {
							// If the username does not exist and the password is matching, then we can save this new user to the database
							// Hash the password before pushing the user onto the database
							bcrypt.hash(password, salt).then(async (hash) => {
								console.log(hash)
								body.password = hash
								body.passwordReEntry = hash
								const user = new User(body);
								user.save((err, user) => {
									if (err) {
										return res.status(400).json({
											error: "Unable to add user"
										})
									}
									
									return res.json({
										message: "Success! Welcome to Break The Algo, " + user.name + " :D"
									})
								})
							})
						}
					} else {
						return res.status(400).json({
							message: "Username already existed, please enter a new one"
						})	
					}
				}
			});
		}
	}
}

// Route for signing in as a new user
exports.user_signin = (req, res) => {
	const username = req.body.username
	const password = req.body.password
	
	if (!username || !password) {
		return res.status(400).json({
			message: "Please enter your username or password"
		})
	} 

	User.findOne({username: username }, function (err, docs) {
		if (err){
			console.log("Something happened")
		}
		else{
			// Logging for debug
			console.log("Result : ", docs)
			if (docs === null) {
				return res.status(400).json({
					message: "Username does not exist, please register first"
				})			
			} else {
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
		}
	});
}

// Data verification functions
function containsSpecialChars(str) {
	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //eslint-disable-line
	return specialChars.test(str);
  }

function containsWhiteSpace(str) {
	return /\s/g.test(str); //eslint-disable-line
}