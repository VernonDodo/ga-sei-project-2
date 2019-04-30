let express = require('express')
let router = express.Router()

const userController = require("../controllers/users")
const accountController = require("../controllers/accounts")
const recordController = require("../controllers/records")

/* The following routes are all the user routes */

router.get('/', userController.index)
router.get('/', userController.getUser)
router.post('/', userController.create)

/* The following are all the account routes */
router.get('/', accountController.getAccounts)
router.get('/', accountController.getAccount)
router.post('/', accountController.update)
router.post('/', accountController.delete)

/* The following are all the record routes */
router.get('/', recordController.getRecord)
router.get('/', recordController.getRecords)
router.post('/', recordController.update)
router.post('/', recordController.create)


module.exports = router

























module.exports = router