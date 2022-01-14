const express = require('express')
const session = require('express-session')
const HomeRoute = require('./routes/HomeRoute')
require('dotenv').config()

const app = express()
app.listen(3000);
app.set('view engine', 'ejs');
app.use('/assets', express.static('public'))
app.use(express.urlencoded({ extended: true }))
