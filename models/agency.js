/*
REQUIREMENTS
*/

const mongoose = require("../db/connection");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

// CREATE THE AGENCY SCHEMA
const Agency = new Schema({
    ssn: String,
    accounts: [{}],
    credit_score: Number
});

module.exports = mongoose.model('Agency', Agency);