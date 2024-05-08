//Define a constant variable respectively and require the bookInventory and authorInventory files at the top of the file.
//const bookInventory = require("../data/bookInventory");
//const authorInventory = require('../data/authorInventory')


// Book
const Book = require('../models/bookModel')

// Author
const Author = require('../models/authorModel')




//--------- GIVEN TO YOU :D -------
const createBook = async (request, response, next) => {

    // Form inputs that the user enters
    const { title, author, price, starRating, synopsis } = request.body;

    // Save the data over a blueprint for every new instance
    const newBook = new Book({
        title: title,
        author: author,
        price: price,
        starRating: starRating,
        synopsis: synopsis,
      });
    


    
    // check if the book is saved
    try {
        // save the book
        await newBook.save();


        response
        .status(201)
        .json({ success: "A new book is created", data: newBook, statusCode: 201 });
    } catch (error) {
        response
        .status(400)
        .json({ error: "Something happened while creating a book", data: newBook, statusCode: 400 });
    }
};

//editBook
const editBook = async (request, response, next) => {
    const { _id } = request.params;

    const { title, author, price, starRating, synopsis } = request.body;

    const updatedBook = {
        title: title,
        author: author,
        price: price,
        startRating: starRating,
        synopsis: synopsis,
    };

    await Book.findByIdAndUpdate({ _id: _id }, updatedBook);

    // check if the book was updated:
    try {
        response.status(200).json({
            success: `The book with id ${_id} is updated successfully`,
            data: updatedBook,
            statusCode: 200,
          });
    } catch (error) {
        response
        .status(400)
        .json({ error: "Something happened while editing a book", statusCode: 400 });
    }
};

//deleteBook
const deleteBook = async (request, response, next) => {
    const { _id } = request.params;

    await Book.findByIdAndDelete({ _id: _id });

    // check if we found the right book and delete it:
    try {
        response.status(200).json({
            success: `The book with id ${_id} is deleted successfully`,
            statusCode: 200,
          });
    } catch (error) { // we want to know of there isn't a match:
        response
        .status(400)
        .json({ error: "Something happened while deleting a book", statusCode: 400 });
    }
};

const createAuthor = async(request, response, next) => {
    const { firstName, lastName, birthYear, bio } = request.body;

    const newAuthor = newAuthor({
        firstName: firstName,
        lastName: lastName,
        birthYear: birthYear,
        bio: bio
    })

    try {
        await newAuthor.save();
        response.status(200).json({
            success: `The book with id ${_id} is deleted successfully`,
            statusCode: 200,
          });
    } catch (error) { // we want to know of there isn't a match:
        response
        .status(400)
        .json({ error: "Something happened while deleting a book", statusCode: 400 });
    }
}

const editAuthor = async(request, response, next) => {
    const { _id } = request.body;

    const { firstName, lastName, birthYear, bio } = request.body;

    const updateAuthor = newAuthor({
        firstName: firstName,
        lastName: lastName,
        birthYear: birthYear,
        bio: bio
    })

    await Author.findByIdAndUpdate({_id: _id}, updateAuthor)

    try {
        await updateAuthor.save();
        response.status(200).json({
            success: `The book with id ${_id} is deleted successfully`,
            statusCode: 200,
          });
    } catch (error) { // we want to know of there isn't a match:
        response
        .status(400)
        .json({ error: "Something happened while deleting a book", statusCode: 400 });
    }
}

const deleteAuthor = async(request, response, next) => {
    const { _id } = request.body;

    const deleteAuthor = newAuthor({
        firstName: firstName,
        lastName: lastName,
        birthYear: birthYear,
        bio: bio
    })
    await Author.findByIdAndDelete

    try {
        await Author.save();
        response.status(200).json({
            success: `The book with id ${_id} is deleted successfully`,
            statusCode: 200,
          });
    } catch (error) { // we want to know of there isn't a match:
        response
        .status(400)
        .json({ error: "Something happened while deleting a book", statusCode: 400 });
    }
}

module.exports = { createBook, editBook, deleteBook, createAuthor, editAuthor, deleteAuthor };