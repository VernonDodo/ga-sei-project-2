/* 
REQUIREMENTS
*/

const account = require('../models/account');
const accountController = {

    home: function(req,res) {
        res.render('home')
    },

    /* GET
    Get all accounts for a user by SSN */
    getAccounts: function (req, res) {
        account.find(req.body)
            .then(accounts => {
                res.render("accounts/accounts", accounts)
            });
    },

    /* GET
    Get a single account for a user */
    getAccount: function (req, res) {
        account.findById(req.params.id)
            .then(accounts => {
                res.render("accounts/account", accounts)
            });
    },

    /* UPDATE
    Update an account for a user. This should redirect to the single account view 
    to show that the account had been updated*/

    update: function (req, res) {
        account.findByIdAndUpdate(req.params.id, req.body)
            .then(accounts => {
                res.redirect("accounts/account")
            });
    },


    /* CREATE
    Create an account for a user. This should redirect back to all accounts view to 
    verify that the account was created for the user */
    create: function (req, res) {
        account.create(req.body)
            .then(accounts => {
                res.redirect("accounts/accounts")
            });

    },


    /* DELETE
    Delete an account only of the balance is zero. This should rederict back to the 
    all accounts for a user page to show that the account had been deleted */
    delete: function (req, res) {
        account.findByIdAndDelete(req.params.id)
            .then(accounts => {
                res.redirect("accounts/accounts")
            })
    }
}

// Export the controller
module.exports = accountController