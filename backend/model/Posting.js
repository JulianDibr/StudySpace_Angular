const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Collection and Schema for a user
let Posting = new Schema({
    user_id: {
        type: String
    },
    content: {
        type: String
    },
    location_type: {
        type: Number
    },
    location_id:{
        type: String
    }
}, {
    collection: 'postings'
});

module.exports = mongoose.model('Posting', Posting);
