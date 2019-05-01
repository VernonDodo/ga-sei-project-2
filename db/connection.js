const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)
// connect to the database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
    mongoose.connect('mongodb://localhost/credit-manager', { useNewUrlParser: true});
}

mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: '+ err);
    process.exit(-1);
});

mongoose.connection.once('open', function() {
    if (process.env.MONGODB_URI) {
        console.log('You are now connected to ' +process.env.MONGODB_URI);
    }
    else {
        console.log('You are now connected to /mongodb://localhost/credit-manager');
    }
});

module.exports = mongoose;
