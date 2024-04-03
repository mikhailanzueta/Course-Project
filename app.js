const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(morgan("dev"));

//Define the routing variable for authorsRoutes
const booksRoutes = require('./routes/booksRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/public")));


// Array containing 3 objects, each object representing information about an author. This is a representation of information that would actually be stored in a database. Since we're not to databases yet, we'll use this array instead. 
const authorList = [
  {
    _id: '001',
    firstName:'Solomon', 
    lastName: 'Northrup',
    birthYear: 1808, 
    bio: 'Solomon Northup was an American abolitionist and the primary author of the memoir Twelve Years a Slave. A free-born African American from New York, he was the son of a freed slave and a free woman of color. A farmer and a professional violinist, Northup had been a landowner in Washington County, New York.'
  },
  {
    _id: '002',
    firstName:'Katsuhiro', 
    lastName: 'Otomo',
    birthYear: 1954, 
    bio: 'Katsuhiro Otomo is a Japanese manga artist, screenwriter, animator and film director. He is best known as the creator of Akira, in terms of both the original 1982 manga series and the 1988 animated film adaptation.'
  },
  {
    _id: '003',
    firstName:'Roald', 
    lastName: 'Dahl',
    birthYear: 1916, 
    bio: 'Khaled Hosseini is an Afghan-American novelist, physician, activist, humanitarian, and UNHCR goodwill ambassador.'
  }
]


//Test this route. Is it operational? If not, what can you do to make it work? What file are you getting the data from?
app.get("/", (request, response, next) => {
  response.status(200).json({success: {message: "This route points to the Home page"}, data: { username, year, signedIn: true } , statusCode: 200});
});

app.get("/authors", (request, response, next) => {
  response.status(200).json({success: {message: "This route points to the Authors page"}, data: {authorList}, statusCode: 200});
});

app.get("/authors/:_id", (request, response, next) => {
  response.status(200).json({success: {message: "This route points to the specific author via the ID"}, statusCode: 200});
  let params = request.params; //store the request.params object in variable
  console.log(params); //console log variable. Read the server.

  //Stage several if-else if-else statements OR a switch statement to detect if there is a strict match for the following values - 001, 002, 003.
  if (params._id === '001') {
      response.status(200).json({success: {message: "This is the 1st page from the Author List"}});
  } else if (params._id === '002') {
    response.json("This is the 2nd page from the Author List");
  } else if (params._id === '003') {
    response.json("This is the 3rd page from the Author List");
  } else { //If there is not a match, console.log "This book doesn't exist. Try searching again."
      console.log("This book doesn't exist. Try searching again.");        
  };
});

//Tell the app to use the routing variables you defined earlier, booksRoutes and authorsRoutes
app.use(booksRoutes);

app.listen(PORT, () => {
  console.log(`Carol's bookstore server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}/`)
});
