/* 
REQUIREMENTS
*/
const User = require('../models/user');

const UserController = {

/* INDEX 
This view sends all the users to the index view */
index: function(req,res) {
    User.find().then(users => {
      res.render("users/index", {users} )  
    });
},

/* GET
Create a function that displays the details for a single user */ 
show: function(req,res) {
    User.findById(req.params.id).then(users => {
        res.render("users/show",{user})
    });
},

/* CREATE
This function is going to create a user if they do not exist in the database.
It should redirect the the index page to show that the user had been created. */
create: function(req,res) {
    User.create(req.body)
    .then(() => {
      res.redirect("/")  
    });
}

}

/*
EXPORTS
*/

// export the controller
module.exports = UserController;