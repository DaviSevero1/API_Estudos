const { ObjectID, ObjectId } = require('bson');//acho que era pra ser bson              
const express = require('express');
const { Collection } = require('mongodb');

const { getDB,conectaDB } = require('./db/conexao');

const app = express();

app.use(express.json());

app.get('/contatos', async function(req, res){
    const contatos = await getDB().collection('Davi Collection').find({}).toArray();
    res.json(contatos);
})

app.post('/contatos', async function (req, res){
    const contatoNovo = await getDB()
    .collection('Davi Collection')
    .insertOne(req.body);
    res.status(201).json(contatoNovo)
})

app.put('/contatos/:id', async function (req, res){
    await getDB()
    .collection('Davi Collection')
    .updateOne(
        {_id: ObjectID(req.params.id)},
        {$set: req.body}
    );
    res.status(204).end();
})

app.delete('/contatos/:id', async function(req, res){
    await getDB()
    .collection('Davi Collection')
    .deleteOne({_id: ObjectId(req.params.id)});
    res.status(204).end();
})

conectaDB(() => {
    app.listen(3000, () => console.log("API esta ON"))
});

