
const express = require('express');
const createError = require('http-errors');
var notasRouter = require('./routes/notas');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', notasRouter);




app.listen(3000, function() {
    console.log("API está ON!")
});

module.exports = app;