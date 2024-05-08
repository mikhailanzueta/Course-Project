// require mongoose:
const mongoose = require("mongoose");

// use destructuring to assign the schema to mongoose:
const {Schema} = mongoose;

// Create the author Schema:
const authorSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "A first name is required"],
        minLength: [1, "Minimum one character"],
    },
    lastName: {
        type: String,
        required: [true, "A last name is required"],
        minLength: [1, "Maximum is one character"],
    },
    birthYear: {
        type: Number,
        required: [true, "The birth year is required"],
        minLength: [4, "Enter full birth year"],
        maxLength: [4, "Enter full birth year"]
    },
    bio: {
        type: String,
        required: [true, "Author's bio is required"],
        minLength: [10, "Minimum ten characters"],
    }
})



const Author = mongoose.model("Author", authorSchema)

// export author
module.exports = Author