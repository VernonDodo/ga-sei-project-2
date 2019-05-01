//= =====================
// REQUIREMENTS
//= =====================
// require express, method-override, morgan (logging tool), and our routes
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const routes = require('./routes/index')

//= =====================
// MIDDLEWARE
//= =====================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

// Code for the app to use handlebars
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))


//= =====================
// Router
//= =====================
// Links the server to our Router File
app.use('/', routes)

//====================================
// Render the landing page for the app
//=====================================



//= =====================
// LISTENERS
//= =====================
// CONNECT MONGOOSE TO "credit-manager" or process env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Connected at port " + PORT);
});