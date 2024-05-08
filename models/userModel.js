// require mongoose:
const mongoose = require('mongoose');
const passport = require('passport'); // will define in auth unit
// use destructuring to assign the schema to mongoose:
const {Schema} = mongoose;

// Create the user schema:
const userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    googleId: {
        type: String
    }
}
)

// Create a new variable called User and inside of this variable, create a new mongoose model that will take in 2 arguments
const User = mongoose.model('User', userSchema);

// export the users:
module.exports = User;