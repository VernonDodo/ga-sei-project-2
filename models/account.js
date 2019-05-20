/*
REQUIREMENTS
*/

const mongoose = require("../db/connection");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

/*
CREATE THE ACCOUNT SCHEMA 
*/
const Account = new mongoose.Schema({
    ssn: String,
    account_holder: String,
    creditor: String,
    type: String,
    balance: Number,
    status: String,
    _id: ObjectId
});

module.exports = mongoose.model("Account", Account);