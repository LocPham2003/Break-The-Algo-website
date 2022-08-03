const User = require("../models/userModel.js")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const salt = 10
var isLoggedIn = false 

// Route for signing up a new user
exports.userSignup = (req, res) => {
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
									} else {
										isLoggedIn = true
										return res.json({
											message: "Success! Welcome to Break The Algo, " + user.name + " :D. You are now a member, so you can login"
										})
									}
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
exports.userSignin = (req, res) => {
	const username = req.body.username
	const password = req.body.password
	
	if (!username || !password) {
		return res.status(400).json({
			message: "Please enter your username or password"
		})
	} 

	User.findOne({username: username }, function (err, docs) {
		if (err){
			res.status(400).json({
				message: "Something happened"
			})		
			console.log("Something happened")
		}
		else{
			if (docs === null) {
				return res.status(400).json({
					message: "Username does not exist, please register first"
				})			
			} else {
				bcrypt.compare(password, docs.password, (error, result) => {
					/* If this succeeds then proceed to create a cookie to store the user token (generated via JWT)
					 Since the token is stored in the cookie and the cookie is used to keep track whether the user
					 need to sign in or not, you just need to delete the cookie from the user browser when making the
					 log out function */
					if(result) {
						// Generate the unique token of the user based on the id
						// Need to find a way to pass this token into the browser's cookie
						const token = jwt.sign({username: docs.username}, process.env.TOKEN_KEY)
						
						isLoggedIn = true

						// Store this token in the cookie
						res.cookie("accessToken", token, {
							httpOnly: true,
						})
						
						res.status(200).json({ message: "Login successful. Redirecting you to Homepage...", token: token }) 
					} else {
						res.status(400).json({ message: "Login not successful, incorrect password "})
						console.log("Login Unsuccessful, Incorrect username or password")
					} 
				})
			}	
		}
	});
}

exports.userSignout = (req, res) => {
	isLoggedIn = false
	console.log("User has signed out")
	return res.clearCookie("accessToken", {path: '/'}).status(200).json({ message : "You have successfully logged out "})
}

exports.isLoggedIn = (req, res) => {
	// Parse the token from the browser cookie
	var name = ''
	var token = req.cookies.accessToken
	if (!token) {
		console.log("Token does not exist")
	} else {
		console.log(token)
		const data = jwt.verify(token, process.env.TOKEN_KEY)
		isLoggedIn = true

		User.findOne({username: data.username}, function (err, docs) {
			if (err){
				res.status(400).json({
					message: "Something happened"
				})		
				console.log("Something happened")
			}
			else{
				if (docs != null) {
					name = docs.name
					console.log(docs.name)	
					return res.status(200).json({
						isLoggedIn: isLoggedIn,
						name: name,
					})
				} else {
					console.log("Unable to find user")
				}
			}
		});

		
	}

	
}

// Data verification functions
function containsSpecialChars(str) {
	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //eslint-disable-line
	return specialChars.test(str);
  }

function containsWhiteSpace(str) {
	return /\s/g.test(str); //eslint-disable-line
}