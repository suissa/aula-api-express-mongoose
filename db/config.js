const mongoose = require('mongoose');
const dbUrl = 'mongodb://henriqueferraz:lai7452@ds127101.mlab.com:27101/ofnet';

mongoose.connect(dbUrl);

mongoose.connection.on('connected', function () {
    console.log('Mongoose -> conexão padrão aberta em: ' + dbUrl);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose -> erro na conexão padrão: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose -> conexão padrão disconectada ');
});

mongoose.connection.on('open', function () {
    console.log('Mongoose -> conexão padrao aberta! ');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose -> conexão padrão desconectada por término do aplicativo');
        process.exit(0);
    });
});