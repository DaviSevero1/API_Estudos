const { MongoClient } = require('mongodb');

const stringConexao = ' '

const databaseName = 'Davi';

let db;

function conectaDB(callback) {
    MongoClient.connect(stringConexao)
    .then(client => {
        console.log("Conectou no MongoDB")
        db = client.db(databaseName)
        callback ();
    })
    .catch(error => console.log("Deu ruim no MongoDB"));
}

function getDB(){
    return db;
}

module.exports = {
    getDB, conectaDB
}   