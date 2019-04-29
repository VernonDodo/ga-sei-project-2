/*
REQUIREMENTS
*/

const mongoose = require("../db/connection");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

// CREATE THE AGENCY SCHEMA
const Record = new Schema({
    ssn: String,
    accounts: [],
    credit_score: Number,
    record_ID: ObjectId
});

module.exports = mongoose.model('Record', Record);