# Diário de bordo da nave estelar USS Enterprise

# Data estelar 140507.X - Houston, we have a problem!

Sistema com Node.js, MongooDb e Express. Houston estamos com um problema no CRUD!!

Primeiramente criamos 2 pastas, db e fields e 2 arquivos dentro da pasta routes, model.js e user.js, que explicaremos a seguir. 

Módulos:
mongoose (modelagem elegante para objetos em MongoDb para NodeJs)
Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

### Pasta db

Arquivo config.js

Conteúdo:
const mongoose = require('mongoose');

**** Criamos uma constante com o nome de mongoose e informamos que ela requer o módulo chamado de mongoose - Em tempo! Por quê criamos uma contante (const) e não uma variável (var)? - Essa resposta deixaremos para o essa pergunta deixaremos para o Imediato e Oficial da ciências Sr. SuissaSpock

const dbUrl = 'mongodb://henriqueferraz:lai7452@ds127101.mlab.com:27101/ofnet';
// Criamos uma constante com o nome de dbUrl e informamos sua variável vai utilizar uma 
// conexão com o mongodb, passando o usuário, a senha e o endereço do serviço de 
// provedoria e qual o nome da base para acesso

mongoose.connect(dbUrl);
// Método mongoose.conect, informa ao mongoose que estamos querendo uma conexão, passamos 
// também a variável dbUrl (que passamos acima), ela informa em que modelo de base de 
// dados, que aqui é o mongodb e passa também as configurações de conexão. 

mongoose.connection.on('connected', function () {
// Método mongoose.connection.on, solicita se foi feita uma conexão, se a resposta for
// "connected", isso quer dizer que a conexão foi bem sucedida, então o sistema entrará no 
// laço e realizará a próxima instrução.

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