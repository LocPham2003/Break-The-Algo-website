const express = require('express')
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
app.use(morgan('combine'))
app.use(cors())
app.use(bodyParser.json())



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

// Using routes
app.use('/', userRoutes)
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
