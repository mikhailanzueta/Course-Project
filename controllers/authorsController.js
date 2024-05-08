const siteData = require('../data/siteData');
//const authorInventory = require('../data/authorInventory');

const Author = require('../models/authorModel');


// Logic to get all authors:
const getAllAuthors = async (request, response, next) => {
    
        if (200) {
            await Author.find({}).then((authors) =>
                //container for
                response.status(200).json({success: {message: "This route points to the authors page with all the authors."},
                data: authors, siteData, statusCode: 200})
            )
        } 
    
}
// Logic to get a single author:
const getAuthor = async (request, response, next) => {
    // Define the params:
    const { _id } = request.params;

    // Logic to find an author from the 'authorInventory' array by their id:
    //const foundAuthor = authorInventory.find(authorInventory => authorInventory._id === Number(_id));

    await Author.findOne({_id: _id}).then((authors) => {
        response.status(200).json({
            success: { message: "This route points to the authors page with one of the books by the ID" },
            data: authors, siteData,
            statusCode: 200,
        })
    })    
}

// Set up module.exports:
module.exports = { getAllAuthors, getAuthor };