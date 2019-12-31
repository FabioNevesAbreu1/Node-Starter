const { Schema, model } = require('mongoose')

const DevSchema = new Schema({ // tabela de produtos
    Nome: {
        type: String,
        required: true,
    },
    Quantidade: {
        type: Number,
        required: true,
    }
});

module.exports = model('Produto', DevSchema)