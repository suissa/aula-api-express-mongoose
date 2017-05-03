const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nome = require('./fields/fields-nome');
const idade = require('./fields/fields-idade');
const created_id = require('./fields/fields-create_id');

// Criação do Shema

const _schema = {
        nome,
        idade,
        created_id
};

module.exports = new Schema(_schema);