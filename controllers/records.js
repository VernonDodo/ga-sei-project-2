/*
REQUIREMENTS
*/

const Record = require('../models/record');

const RecordController = {

/* GET
Get all records for a single user */
    getRecord: function(req,res) {
        Record.findById(req.params.id)
        .then(records => {
            res.render("records/records", records)
        })
    },

/* GET
Get a specific record for a user */
    getRecords: function(req,res) {
        Record.findById(req.params.id)
        .then(records => {
            res.render("records/record", records)
        })
    },

/*UPDATE
Update a specific record for a user */
    update:function(req,resp) {
        Record.findByIdAndUpdate(req.params.id, req.body)
        .then(records => {
            res.redirect("records/record")
        })
    },

/*CREATE
Create a record for a user */
    create: function(req,res) {
        Record.create(req.body)
        .then(records => {
            res.redirect("records/record")
        })
    }

}

// export the Controller
module.exports = RecordController;