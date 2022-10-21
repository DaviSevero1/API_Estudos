const  { ObjectID, ObjectId } = require('bson');
const express = require('express');
const {Collection} = require('mongodb')

const { getDB, conectaDB} = require('./db/conexao');

const app = express();

app.use(express.json());

app.get('/produtos', async function(req, res){
    const produtos =  getDB().collection('Davi Collection').find({}).toArray();
    res.json(produtos);

})     

app.post('')

conectaDB(()=>{
    app.listen(3000,() => console.log("API TA ON!"))
});