const User = require("../models/userModel.js")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const salt = 10

// Route for signing up a new user
exports.userSignup = (req, res) => {
	const body = req.body;
	const username = req.body.username
	const email = req.body.email
	const password = body.password
	const passwordReEntry = body.passwordReEntry

	const tueEmail = '@student.tue.nl'

	if (!email.toLowerCase().includes(tueEmail.toLowerCase())) {
		return res.status(400).json({
			message: "Please use Eindhoven University of Technology student email to sign up"
		})
	}

	if (password.length < 8) {
		return res.status(400).json({
			message: "Please use a password with more than 8 characters"
		})
	}

	if (!Number.isInteger(+body.studyYear) || parseInt(body.studyYear) < 1) {
		return res.status(400).json({
			message: "Invalid study year"
		})
	  }

	if (!body.name || !body.studyMajor || !body.studyYear || !username || !password || !body.email) {
		return res.status(400).json({
			message: "Please make sure you have fully filled in all necessary information"
		})
	} else {
		if (containsSpecialChars(username) || containsWhiteSpace(username)) {
			return res.status(400).json({
				message: "Username must not contain whitespaces or special characters"
			})
		} else {
			User.findOne({email : body.email}, function (err, docs) {
				if (err) {
					console.log("Something happened")
				} else {
					if (docs === null) {
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
					} else {
						return res.status(400).json({
							message: "Email is already used, please enter a new one"
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
						
						// Store this token in the cookie
						res.cookie("accessToken", token, {
							httpOnly: true,
						})
						
						return res.status(200).json({ message: "Login successful. Redirecting you to Homepage...", token: token }) 
					} else {
						console.log("Login Unsuccessful, Incorrect username or password")
						return res.status(400).json({ message: "Login not successful, incorrect password "})
					} 
				})
			}	
		}
	});
}

exports.userSignout = (req, res) => {
	console.log("User has signed out")
	return res.clearCookie("accessToken", {path: '/'}).status(200).json({ message : "You have successfully logged out "})
}

exports.userSignUpEvent = (req, res) => {
	User.findOneAndUpdate({email: req.body.email}, {$push: {events: {code: req.body.code}}}, function(err, user) {
		if (err) {
			console.log(err)
			return res.json({ message: "Failed to add event to user's event list"})
		} else {
			return res.json({ message: "Successfully added event " + req.body.code + " to " + user.name + "'s list of events."})
		}
	})
}

exports.userDeregisterEvent = (req, res) => {
	User.findOneAndUpdate({ email: req.body.email}, {$pull: {events: {code: req.body.code}}}, function(err, user) {
		if (err) {
			console.log(err)
			return res.json({ message: "Failed to deregister the user"})
		} else {
			return res.json({ message: "Successfully remove event " + req.body.code + " from " + user.name + "'s list of events"})
		}
	})
}

exports.getUserListOfEvents = (req, res) => {
	User.findOne({email: req.body.email}, function(err, user) {
		if (err) {
			return res.json({ message: "Error in getUserListOfEvents"})
		} else {
			if (user.events === null) {
				return res.json({ events: [] })
			} else {
				return res.json({ events: user.events })
			}
		}
	})
}

exports.userState = (req, res) => {
	// Parse the token from the browser cookie
	var token = req.cookies.accessToken
	if (!token) {
		console.log("Token does not exist")
		return res.status(200).json({
			isLoggedIn: false,
		})
	} else {
		console.log(token)
		const data = jwt.verify(token, process.env.TOKEN_KEY)

		User.findOne({username: data.username}, function (err, docs) {
			if (err){
				res.status(400).json({
					message: "Something happened"
				})		
				console.log("Something happened")
			}
			else{
				if (docs != null) {
					const name = docs.name
					const username = docs.username
					const studyMajor = docs.studyMajor
					const studyYear = docs.studyYear
					const role = docs.role
					const email = docs.email
					return res.status(200).json({
						isLoggedIn: true,
						name: name,
						studyYear: studyYear,
						studyMajor: studyMajor,
						username: username,
						role: role,
						email : email
					})
				} else {
					console.log("Unable to find user")
				}
			}
		});

		
	}
}

exports.changePassword = (req, res) => {
	const body = req.body;
	const email = body.email
	const currentPassword = body.currentPassword
	const newPasswordReEntry = body.newPasswordReEntry
	const newPassword = body.newPassword

	// Check if user email exists -> compare current password -> update new password
	User.findOne({email : email}, function(err, docs){
		if (docs != null) {
			bcrypt.compare(currentPassword, docs.password, (error, result) => {
				/* If this succeeds then proceed to create a cookie to store the user token (generated via JWT)
				 Since the token is stored in the cookie and the cookie is used to keep track whether the user
				 need to sign in or not, you just need to delete the cookie from the user browser when making the
				 log out function */
				if(result) {
					// Generate the unique token of the user based on the id
					// Need to find a way to pass this token into the browser's cookie
					if (newPasswordReEntry != newPassword) {
						return res.status(400).json({
							message: "Password does not match, please check again"
						})	
					} else {
						// If the username does not exist and the password is matching, then we can save this new user to the database
						// Hash the password before pushing the user onto the database
						bcrypt.hash(newPassword, salt).then(async (hash) => {
							body.newPassword = hash
							body.newPasswordReEntry = hash
							
							User.findOneAndUpdate({email : email}, {password : body.newPassword, passwordReEntry: body.newPasswordReEntry}, function(err, docs){
								if (err) {
									console.log("Unable to update password")
									console.log(err)
								} else {
									console.log(docs.name)
									return res.json({message: "Password updated successfully, you can now leave this tab."})
								}
							}) 
						})
					}
					
				} else {
					return res.status(400).json({ message: "Current password is not correct, please try again."})
				} 
			})
		} else {
			return res.status(400).json({ message: "Email address is invalid or does not exist, please try again."})
		}
	})

	
}

// Data verification functions
function containsSpecialChars(str) {
	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //eslint-disable-line
	return specialChars.test(str);
  }

function containsWhiteSpace(str) {
	return /\s/g.test(str); //eslint-disable-line
}

function isInteger(value) {
	return /^\d+$/.test(value);
  }
