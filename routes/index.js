let express = require('express')
let router = express.Router()

const applicationController = require("../controllers/app")
const userController = require("../controllers/users")
const accountController = require("../controllers/accounts")
const recordController = require("../controllers/records")

router.get('/', applicationController.index)

/* The following routes are all the user routes */

router.get('/users', userController.getUsers)
router.get('/users/:id', userController.getUser)
router.get('/users/new',userController.new)
router.post('/users', userController.createUser)
router.post('users/:id', userController.deleteUser)

/* The following are all the account routes */
router.get('/accounts', accountController.getAccounts)
router.get('/accounts/:id', accountController.getAccount)
router.get('/accounts/search', accountController.searchAccount)
//router.post('/accounts/:id', accountController.update)
router.post('/accounts', accountController.delete)
router.get('accounts/new', accountController.new)

/* The following are all the record routes */
router.get('/records/:id', recordController.getRecord)
router.get('/records', recordController.getAllRecords)
router.post('/records/:id', recordController.update)
router.post('/records', recordController.create)


module.exports = router

