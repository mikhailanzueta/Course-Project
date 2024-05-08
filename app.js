require('dotenv').config();
require('./config/connection');
require('./config/authStrategy');
const express = require('express');
const app = express();
// Middleware
const morgan = require('morgan');
// require 'cors'
const cors = require('cors');
// Path module
const path = require('node:path');
const helmet = require('helmet');
const session = require('express-session');
const passport = require('passport');
const PORT = process.env.PORT || 4000; // port change to minimize server clashes

// USE MORGAN
app.use(morgan('dev'))
// --------------------------------------------------------------------


// ---------------------------------------------------------------------

// Require the 'booksRouter.js' file:
const booksRoutes = require('./routes/booksRouter');
// Require the 'authorsRouter.js' file
const authorsRoutes = require('./routes/authorsRouter');
// Require the 'adminRouter.js' file:
const adminRoutes = require('./routes/adminRouter');
//require the 'siteRoutes.js' file:
const siteRoutes = require('./routes/siteRouter');
// Require the 'siteData.js' file:
const siteData = require('./data/siteData');
app.get("/", (request, response, next) => {
  response.status(200).json({success: {message: "This route points to the Home page"}, data: siteData, statusCode: 200});
});



// -----------------------------------------------------------------------

app.use(cors());
app.use(helmet())
// USE JSON
app.use(express.json());
// Encode forms
app.use(express.urlencoded({ extended: false }));
// Use the public directory
app.use(express.static(path.join(__dirname, "public")));


app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize()); 
app.use(passport.session()); 

// Use 'cors'
// disable until authentication unit
//app.use(cors)

// -----------------------------------------------------------------------

// GET the index route:
app.get('/', (request, response, next) => {
    // send message
    response.status(200).json({success: {message: "This route points to the homepage"}, statusCode: 200})
})

//-----------------------------------------------------------------------

// Use the 'booksRoutes' variable:
app.use(booksRoutes);
// Use the 'authorsRoutes' variable;
app.use(authorsRoutes);
// use the adminRoutes:
app.use(adminRoutes);
// use the 'siteRoutes' variable:
app.use(siteRoutes);

// -----------------------------------------------------------------------
// Server
app.listen(PORT, ()=>{
    console.log(`Carol's bookstore server is listening on port ${PORT}!`)
    console.log(`http://localhost:${PORT}`);

    console.log(`class DB: ${process.env.CLASS_DB}`)
})