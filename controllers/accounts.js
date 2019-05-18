/* 
REQUIREMENTS
*/

const account = require('../models/account');
const accountController = {

    home: function(req,res) {
        res.render('home')
    },

    /* GET
    Get all accounts*/
    getAccounts: function (req, res) {
        account.find()
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

    new: function(req,res) {
        res.render("accounts/new")
    },

    /* CREATE
    Create an account for a user. This should redirect back to all accounts view to 
    verify that the account was created for the user */
    create: function (req, res) {
        let company = "creditor"
        switch (body.req.financetype) {
            case "Personal":
                company = "PFC"
                break;
            case "Auto Finance":
                company = "PFC"
                break;
            case "Mortgage":
                company = "MFC"
                break;
            default:
                company = "AFC"

        }
        account.create({
            ssn: req.body.ssn,
            account_holder: (req.body.firstname + " " + req.body.lastname),
            creditor: company,
            type: body.req.financetype,
            balance: body.req.amount,
            status: "Current",    
        }) 
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