const { ObjectId, ObjectID } = require('bson');
const mongoose = require('mongoose');
const contatoModels = require('./models/contatoModels');
const Contato = require('./models/contatoModels');

const url = 'mongodb+srv://davisevero1:gYTqPLmZKsORHs5B@mydatabase.vnwkgxc.mongodb.net/contatosdb?retryWrites=true&w=majority';

mongoose.connect(url)
    .then(console.log("Conectou no Mongo"))
    .catch(error => console.log('Deu ruim!',error));

const novoContato = new contatoModels({nome : 'Davi', fone: '8888-8888'});
novoContato.save().catch(error => console.log(error));
console.log(novoContato._id)

Contato.find({}).then(listaContatos => 
    console.log(listaContatos)
    );
Contato.findOne({_id: novoContato._id}).then(contato => 
    console.log(contato)
    );

Contato.findById(novoContato._id).then(contato => 
    console.log
    );

Contato.updateOne({_id: novoContato._id},{nome:"Maria"})
    .then(console.log('apagou'))
    .catch(error => console.log(error))

Contato.deleteOne({_id: novoContato._id})
.then(console.log('apagou'))
.catch(error => console.log(error));