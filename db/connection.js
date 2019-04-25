const mongoose = require('mongoose');

// connect to the database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
    mongoose.connect('mongodb://localhost/credit-manager');
}

mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: '+ error);
    process.exit(-1);
});

mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
});
