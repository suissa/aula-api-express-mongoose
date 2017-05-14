# Diário de bordo da nave estelar USS Enterprise

# Data estelar 140507.X - Houston, we have a problem!

Node.js, MongooDb e Express. 
Houston estamos com um problema no CRUD!!

Para o "MEU PROCESSO DE APRENDIZAGEM", preciso entender lógicamente o que cada linha faz, como se estivesse conversando com o computador e falando na linguagem do interpretador, do mesmo jeito que estivesse falando com um Americano, ou com um Chinês. Tenho que saber o teor de nossa conversa, linha por linha. 

O exemplo que criamos foi uma conexão básica, e estamos desenvolvendo um CRUD "CRUD é o acrônimo da expressão do idioma Inglës, Create (Criação), Retrieve (Consulta), Update (Atualização) e Delete (Destruição). Este acrônimo é comumente utilizado para definir as quatro operações básicas usadas em Banco de Dados."

Com base nestas informações criamos, no projeto, 2 pastas, db e fields e 2 arquivos dentro da pasta routes, model.js e user.js, que explicaremos o passo-a-passo a seguir. 

````
Definição dos módulos utilizados:
mongoose (modelagem elegante para objetos em MongoDb para NodeJs)
Mongoose provides a straight-forward, schema-based solution to model your application data.
It includes built-in type casting, validation, query building, business logic hooks and 
more, out of the box.
````

### Pasta db

Arquivo config.js

```js
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
```

Conteúdo:
```js
const mongoose = require('mongoose');
````

Criamos uma constante com o nome de mongoose e informamos que ela requer o módulo chamado de mongoose - Em tempo! Por quê criamos uma contante (const) e não uma variável (var)? - Essa resposta deixaremos para o essa pergunta deixaremos para o Imediato e Oficial da ciências Sr. SuissaSpock

```js
const dbUrl = 'mongodb://henriqueferraz:lai7452@ds127101.mlab.com:27101/ofnet';
````

Criamos uma constante com o nome de dbUrl e informamos sua variável vai utilizar uma conexão com o mongodb, passando o usuário, a senha e o endereço do serviço de provedoria e qual o nome da base para acesso.

```js
mongoose.connect(dbUrl);
```

Método mongoose.conect, informa ao mongoose que estamos "escutando" a conexão do endereço passado pela variável dbUrl (que passamos acima).

```js
mongoose.connection.on('connected', function () {
````
    
Método mongoose.connection.on, se foi feita uma conexão e a resposta for "connected", isso quer dizer que a conexão foi bem sucedida, então o sistema entrará no laço e realizará a próxima instrução.

````js
    console.log('Mongoose default connection open to ' + dbUrl);
});
````
Mostrará no console um log com a seguinte informação: "Foi aberto uma conexão default com o Mongoose no endereço XYZ"

````js
mongoose.connection.on('error', function (err) {
````
Método mongoose.connection.on, se foi feita uma conexão e a resposta for "error", isso quer dizer que a houve um erro na conexão, então o sistema entrará no laço e realizará a próxima instrução, retornando na função qual o tipo de erro.

````js
    console.log('Mongoose default connection error ' + err);
});
````
Mostrará no console um log com a seguinte informação: "Houve um erro com a conexão default do Mongoose" e informará o tipo do erro ex.: Mongoose default connection error MongoError: Authentication failed. (erro de autenticação).

````js
mongoose.connection.on('disconnected', function () {
````
Método mongoose.connection.on, como dissemos anteriormente o método fica "escutando" a conexão se o retorno for "disconnected", quer dizer que a conexão foi desconectada e o sistema entrará no laço e fará a próxima ação.

````js
    console.log('Mongoose default connection disconnected ');
});
````
Mostrará no console um log com a seguinte informação: "A conexão defaul com o Mongoose foi desconectada"..connection.on('open', function () {
    console.log('Mongoose default connection is open ');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});