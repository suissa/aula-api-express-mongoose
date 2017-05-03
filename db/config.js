const mongoose = require('mongoose');
const dbUrl = 'mongodb://henriqueferraz:lai7452@ds127101.mlab.com:27101/ofnet';

mongoose.connect(dbUrl);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbUrl);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected ');
});

mongoose.connection.on('open', function () {
    console.log('Mongoose default connection is open ');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});