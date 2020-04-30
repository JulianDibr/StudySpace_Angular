const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Collection and Schema for a user
let User = new Schema({
    first_name: {
        type: String
    },

    last_name: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String //TODO: Encrypt password
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('User', User);
