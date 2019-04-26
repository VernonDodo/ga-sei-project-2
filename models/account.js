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
    SSN: Number,
    account_holder: String,
    type: String,
    balance: Number,
    status: String,
    payments: []
});

module.exports = mongoose.model("Account", Account);