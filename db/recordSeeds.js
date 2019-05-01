let Record = require('../models/record')

let newRecords = [
    {ssn: "587-62-5931", accounts: [{creditor: "MFC", type: "Mortgage", balance: 100000, status: "current"},{type: "Personal Loan", balance: 10000, status: "current"}], credit_score: 700 },
    {ssn: "587-62-5932", accounts: [{creditor: "VFC", type: "Auto Finance", balance: 15000, status: "current"}], credit_score: 850},
    {ssn: "587-62-5933", accounts: [{creditor: "PFC", type: "Personal Loan", balance: 1000, status: "current"}], credit_score: 800},
    {ssn: "587-62-5934", accounts: [{creditor: "AFC", type: "Asset Finance", balance: 500000, status: "current"}], credit_score: 850},
    {ssn: "587-62-5935", accounts: [{creditor: "MFC", type: "Mortgage", balance: 200000, status: "current"}], credit_score: 750},
    {ssn: "587-62-5936", accounts: [{creditor: "MFC", type: "Mortgage", balance: 150000, status: "current"}], credit_score: 700},
    {ssn: "587-62-5937", accounts: [{creditor: "MFC", type: "Mortgage", balance: 250000, status: "current"},{type: "Auto Finance", balance: 10000, status: "current"}], credit_score: 650},
    {ssn: "587-62-5939", accounts: [{creditor: "VFC", type: "Auto Finance", balance: 12500, status: "current"},{type: "Personal Loan", balance: 5000, status: "current"}], credit_score: 600},
    {ssn: "577-72-5931", accounts: [{creditor: "MFC", type: "Mortgage", balance: 500000, status: "current"},{type: "Asset Finance", balance: 1000000, status: "current"}], credit_score: 850},
    {ssn: "578-73-5932", accounts: [{creditor: "MFC", type: "Mortgage", balance: 100000, status: "current"},{type: "Auto Finance", balance: 25000, status: "current"},{type: "Asset Finance", balance: 100000, status: "current"}], credit_score: 700}

]

Record.remove({})
.then(Record.create(newRecords))
.then(Record => {
    console.log('Created a new record', newRecords)
})