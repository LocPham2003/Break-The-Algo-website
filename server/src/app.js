const express = require('express')
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const cors = require('cors')
// This cors option is enabled so that when the client side send a request, the server side can access the data stored in the cookie with the given security properties.
// For example, the user authentication token is created in the server side and we would like to store it in the cookie with httpOnly flag set to true. We can only do this in the server side,
// not with the client side. Hence, when an user access the website on the client side (port 8080), they will unable to access the data stored in the cookie as we do not authorize them to do so. 
// however, with this option, the auth token generated on the server side with httponly flag on will also be accessible to the client, so the client can access the token in the cookie, send it to
// the backend for authorization everytime they visit the site. 
// Without this, it would not work
const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true 
};
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const cookieParser = require('cookie-parser');
app.use(cookieParser())
app.use(morgan('combine'))
app.use(cors(corsOptions))
app.use(bodyParser.json())

// Note to self in the future. If an error caused via MongoServerSelection error then fix it as follows:
// A. Go to https://www.whatismyip.com/
// B. Copy your public IPv4 or IPv6 address
// C. Go to network access in MongoDB dashboard, add the IP address above, save and try again 
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
  }).then(() => {
	console.log("Database connected")
  }).catch((error) => {
	console.log(error)
  })

// Importing routes 
const userRoutes = require('../src/routes/userRoutes')
const eventRoutes = require('../src/routes/eventRoutes')
// Using routes
/**
 * Note to future self: Since you are defining the route in a different folder to help the code to be organized,
 * any sorts of parsing library (e.g cookie parser, json parser, etc) needs to be defined in the file where the route
 * is referred for usage.
 * 
 * In this case, app.use(the_route), hence, cookie-parser and body-parser must be declared in app.js in order for the libary
 * to take effect
 */
app.use('/', userRoutes)
app.use('/', eventRoutes)
// Note: in several cases, it will happen that you try to start the server using npm start, but your server does not start
// and it returns the error: Error: listen EADDRINUSE: address already in use :::8081
// There is a simple fix to this. Go to Task Manager, search for Nodejs process and terminate it. Now it should work as normal
app.listen(process.env.PORT, () => {
	console.log("Server started at " + process.env.PORT)
})

// Add a new user
// app.post('/users', (req, res) => {
// 	const name = req.body.name
// 	const studyMajor = req.body.studyMajor
// 	const studyYear = req.body.studyYear
// 	const username = req.body.username
// 	const password = req.body.encrypted_password
// 	const email = req.body.email
// 	const new_user = new User({
// 		name: name,
// 		studyMajor: studyMajor,
// 		studyYear: studyYear,
// 		username: username,
// 		encrypted_password: encrypted_password,
// 		email: email
// 	})

// 	new_user.save(function(error) {
// 		if (error) {
// 			console.log(error)
// 		}
// 		res.send({
// 			success: true,
// 			message: 'User registered successfully'
// 		})
// 	})
// })

// Fetch all users
// app.get('/users', (req, res) => {
// 	User.find({}, 'name password', function (error, users) {
// 	if (error) { console.error(error); }
// 	res.send({	users: users })
// 	})
// })


// app.get('/users', bodyParser.json(), (req, res) => {
// 	res.send([
// 	{
// 		name: "Loc Pham",
// 		password: "24092003"
// 	},
// 	{
// 		name: "Nidhish Shah",
// 		password: "909092354"
// 	}
// 	])
// })

//const cookieParser = require('cookie-parser')
