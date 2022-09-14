var express = require('express');
var router = express.Router();

const contatosController = require('../controllers/contatos')

/* GET users listing. */
router.get('/', contatosController.listar);

/* GET ID lista um contato pelo ID*/
router.get('/:id',contatosController.exibir);

/* POST criar um novo contato*/
router.post('/', contatosController.criar);

/* PUT ID atualizar um contato pelo ID*/
router.put('/:id',contatosController.atualizar);

/* DELETE ID remove um contato pelo ID*/
router.delete('/:id',contatosController.remover);

module.exports = router;
