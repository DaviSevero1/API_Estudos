const express = require('express');
var router =  express.Router();

const notasController = require('../controllers/notas');


router.get('/',notasController.listar);

router.get('/notas',notasController.exibir_notas);

router.get('/faltas',notasController.exibir_faltas);

router.get('/boletos', notasController.exibir_boletos);

router.get('/boletos/:id', notasController.criar);

router.get('/transferencias',notasController.exibir_requerimentos);

router.get('/requerimentos/:id', notasController.exibir_requerimentos_id);

router.post('/requerimentos', notasController.criar_requerimento);

module.exports = router;