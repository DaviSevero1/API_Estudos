const { MongoClient } = require('mongodb');
//const { conectaDB } = require('../../mongodb');
const stringConexao = 'mongodb+srv://davisevero1:eF1mfDvtgVDkoJV5@mydatabase.vnwkgxc.mongodb.net/?retryWrites=true&w=majority'

const dataBaseName = 'davisevero1';

let db;

function conectaDB(callback){
    MongoClient.connect(stringConexao)
    .then(client => {
        console.log("DB Conected!")
        db = client.db(dataBaseName)
        callback( );
    })
    .catch(error => console.log("Deu ruim"));
}

function getDB(){
    return db;
}

module.exports = {
    getDB, conectaDB
}