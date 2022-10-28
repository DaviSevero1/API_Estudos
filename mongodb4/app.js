const express = require('express');
const mongoose = require('mongoose');

const contatoRouter = require('./routes/contatoRouter');

const url = 'mongodb+srv://davisevero1:ZVOt7mjnz5TDLHni@mydatabase.vnwkgxc.mongodb.net/mydatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json());

app.use('/contatos',contatoRouter);

mongoose.connect(url)
    .then(app.listen(3000,() =>{
    console.log('Api esta ON na porta 3000!');
    }))
    .catch(error => console.log("Deu ruim!", error));