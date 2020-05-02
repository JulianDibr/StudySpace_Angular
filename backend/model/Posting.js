const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Collection and Schema for a user
let Posting = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    content: String,
    location_type: Number,
    location_id: String,
}, {
    timestamps: true
}, {
    collection: 'postings'
});

module.exports = mongoose.model('Posting', Posting);
