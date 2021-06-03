const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./database/db')
const employeeRoute = require('./routes/employees')
const morgan = require('morgan')

const app = express()

// Connecting to Database
connectDB()


// template engine
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', employeeRoute)

const Port = process.env.Port
app.listen(Port, () => console.log('Server Started'))