const express = require('express');
const createError = require('http-errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false}));

app.get('/', function(req,res,nex){
    res.status(200).json({msg: "Na escuta!"});
});

app.get('/:id', function(req,res,next){
    if(Number(req.params.id) === 99999){
        return next(createError(404,'TEM NAO!'));
    }
    req.params. 
    res.status(200).json({id: req.params.id});
});


app.post('/',(req, res, next) => { 
    res.status(201).json({id: 1,
        contato: req.body.contato,
        fone:req.body.fone}
        );
});

app.put('/',(req, res, next) => {
    res.status(204).json({});
    console.log('deu bom');
});

app.delete('/',(req, res, next) => {
    res.status(204).json({});
});

app.listen(3000, () =>{
    console.log('ÁPI esta on');
});/*
// ------------------- Aula 03 -----------------------



const express = require('express');

const app = express();


app.get('/', (req, res, next) => {
    res.json({});
})

app.get('/:id', (req, res, next) => {

    if(Number(req.params.id) === 99999999){
        return res.status(404).end();
    }
    res.json({});
})

module.exports = app;*/
