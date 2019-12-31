const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const bodyParser = require("body-parser")


const server = express();


mongoose.connect('mongodb+srv://'+Usuario+':'+Senha+'@cluster0-fcvhz.mongodb.net/'+NomeDoBanco+'?retryWrites=true&w=majority', { //Coloca a string de conexão do seu cluster MongoDB
    useNewUrlParser: true
});
server.use(cors()); 
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(routes);



server.listen(3000); // vai rodar no localhost:3000