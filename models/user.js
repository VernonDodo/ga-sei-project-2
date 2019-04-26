// requirements: require db/connection as 'mongoose'
const mongoose = require("../db/connection");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

// create the user schema
const User = new mongoose.Schema({
    SSN: Number,
    first_name: String,
    last_name: String    
});

module.exports = mongoose.model("User", User);