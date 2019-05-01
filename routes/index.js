let express = require('express')
let router = express.Router()

const userController = require("../controllers/users")
const accountController = require("../controllers/accounts")
const recordController = require("../controllers/records")


/* The following routes are all the user routes */

router.get('/users', userController.index)
router.get('/users/:id', userController.getUser)
router.post('/users', userController.create)

/* The following are all the account routes */
router.get('/accounts', accountController.getAccounts)
router.get('/accounts/:id', accountController.getAccount)
router.post('/accounts/:d', accountController.update)
router.post('/accounts', accountController.delete)

/* The following are all the record routes */
router.get('/records/:id', recordController.getRecord)
router.get('/records', recordController.getRecords)
router.post('/records/:id', recordController.update)
router.post('/records', recordController.create)


module.exports = router

























module.exports = router