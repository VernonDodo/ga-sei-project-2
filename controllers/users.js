/* 
REQUIREMENTS
*/
const User = require('../models/user');

const UserController = {

    /* GET ALL USERS 
    This function displays all the users */
    getUsers: function (req, res) {
        User.find().then(users => {
            res.render("users/users", { users })
        });
    },

    /* GET
    Create a function that displays the details for a single user */
    getUser: function (req, res) {
        User.findById(req.params.id).then(users => {
            res.render("users/user", { users })
        });
    },

    new: function(req,res){
        res.redirect("users/new")
    },

    /* CREATE
    This function is going to create a user if they do not exist in the database.
    It should redirect to the all users page to show that the user had been created. */
    createUser: function (req, res) {
        User.create({
            ssn: req.body.ssn,
            first_name: req.body.firstname,
            last_name: req.body.lastname
            
        }).then(user => {
            //user.UserID = _id;
            res.redirect("users/user") 
        })
        
    }

}

// export the controller
module.exports = UserController;