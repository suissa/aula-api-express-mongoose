const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nome = require('./../fields/fields-nome');
const email = require('./../fields/fields-email');
const senha = require('./../fields/fields-senha');
const created_id = require('./../fields/fields-create_id');

// Criação do Schema

const _schema = {
        nome,
        email,
        senha,
        created_id
};

module.exports = new Schema(_schema);