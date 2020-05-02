const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Collection and Schema for a user
let User = new Schema({
    posting: [{ type: Schema.Types.ObjectId, ref: "Posting"}],
    user: [{ type: Schema.Types.ObjectId, ref: "User"}]
}, {
    collection: 'posting_votings'
});

module.exports = mongoose.model('Voting', Voting);
