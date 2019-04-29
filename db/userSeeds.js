/*
REQUIREMENTS
*/

let User = require('../models/user')

let newUsers = [
    {ssn: "587-62-5931", first_name: "John", last_name: "Wick" },
    {ssn: "587-62-5932", first_name: "Craig", last_name: "Deely" },
    {ssn: "587-62-5933", first_name: "Bonnie", last_name: "Brae" },
    {ssn: "587-62-5934", first_name: "Patsy", last_name: "Cline" },
    {ssn: "587-62-5935", first_name: "Victor", last_name: "Woods" },
    {ssn: "587-62-5936", first_name: "Bart", last_name: "Baxter" },
    {ssn: "587-62-5937", first_name: "Lisa", last_name: "Stanfield" },
    {ssn: "587-62-5938", first_name: "Homer", last_name: "Simpson" },
    {ssn: "587-62-5939", first_name: "Marge", last_name: "Simpson" },
    {ssn: "578-71-5920", first_name: "Jason", last_name: "Bourne" },
    {ssn: "577-72-5931", first_name: "Carrol", last_name: "Channing" },
    {ssn: "578-73-5932", first_name: "Brooke", last_name: "Oglethorpe" },
    {ssn: "578-74-5933", first_name: "Tucker", last_name: "Chamblee" },
    {ssn: "578-75-5934", first_name: "Dhaya", last_name: "Singh" },
    {ssn: "578-76-5935", first_name: "Phadma", last_name: "Lahkshmi" },
    {ssn: "578-77-5936", first_name: "James", last_name: "Bond" }

]

Users.remove({})
.then(User.create(newUsers))
.then(User => {
    console.log("Created new users", Users)
})