const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(cors())

var jsonParser = bodyParser.json()

app.post('/register', jsonParser, (req, res) => {
    res.send({
        message: 'Username ' + req.body.username + 
        " | password: " + req.body.password + 
        " | email: " + req.body.email + 
        " | name: " + req.body.name + 
        " | studyMajor: " + req.body.studyMajor +
        " | studyYear: " + req.body.studyYear
    })
})

app.listen(process.env.PORT || 8081)