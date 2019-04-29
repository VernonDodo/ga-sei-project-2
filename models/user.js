// requirements: require db/connection as 'mongoose'
const mongoose = require("../db/connection");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

// create the user schema
const User = mongoose.Schema({
    ssn: String,
    first_name: String,
    last_name: String,
    userID: ObjectId    
})

module.exports = mongoose.model("User", User);