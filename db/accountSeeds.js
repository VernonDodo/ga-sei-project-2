let Account = require('../models/account.js')

let newAccounts = [
    {ssn: "587-62-5931", account_holder: "John Wick", creditor:"MFC",  type: "Mortgage", balance: 100000, status: "current"},
    {ssn: "587-62-5932", account_holder: "Craig Deely", creditor: "VFC", type: "Auto Finance", balance: 15000, status: "current"},
    {ssn: "587-62-5933", account_holder: "Bonnie Brae", creditor: "PFC", type: "Personal Loan", balance: 1000, status: "current"},
    {ssn: "587-62-5934", account_holder: "Patsy Cline", creditor: "AFC", type: "Asset Finance", balance: 500000, status: "current"},
    {ssn: "587-62-5935", account_holder: "Victor Woods", creditor: "MFC", type: "Mortgage", balance: 200000, status: "current"},
    {ssn: "587-62-5936", account_holder: "Bart Baxter",creditor: "PFC", type: "Personal Loan", balance: 10000, status: "current"},
    {ssn: "587-62-5937", account_holder: "Lisa Stanfield", creditor:"MFC", type: "Mortgage", balance: 250000, status: "current"},
    {ssn: "587-62-5937", account_holder: "Lisa Stanfield", creditor: "VFC", type: "Auto Finance", balance: 10000, status: "current"},
    {ssn: "587-62-5939", account_holder: "Marge Simpson", creditor: "VFC", type: "Auto Finance", balance: 12500, status: "current"},
    {ssn: "587-62-5939", account_holder: "Marge Simpson", creditor: "PFC", type: "Personal Loan", balance: 5000, status: "current"},
    {ssn: "577-72-5931", account_holder: "Carrol Channing", creditor:"MFC", type: "Mortgage", balance: 500000, status: "current"},
    {ssn: "577-72-5931", account_holder: "Carrol Channing", creditor: "AFC", type: "Asset Finance", balance: 1000000, status: "current"},
    {ssn: "578-73-5932", account_holder: "Brooke Oglethorpe", creditor: "MFC", type: "Mortgage", balance: 100000, status: "current"},
    {ssn: "578-73-5932", account_holder: "Brooke Oglethorpe", creditor:"VFC", type: "Auto Finance", balance: 25000, status: "current"},
    {ssn: "578-73-5932", account_holder: "Brooke Oglethorpe", creditor:"AFC", type: "Asset Finance", balance: 100000, status: "current"},
]

Account.remove({})
.then(Account.create(newAccounts))
.then(Account => {
    console.log('Created accounts', newAccounts)
})