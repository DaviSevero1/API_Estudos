const express= require('express');
const router = express.Router();

const contatosControllers = require('../controllers/contatosControllers')

// endpoint: /contatos
// GET: Listar contatos
router.get("/", contatosControllers.listar);
  
  // endpoint: /contatos/3
  // GET: Listar um contato por id
  router.get("/:id", contatosControllers.listarID);
  
  // endpoint: /contatos
  // POST: Cadastrar novo contato
  router.post("/",contatosControllers.criar);
  
  // endpoint: /contatos/id
  // PUT: Editar um contato por id
  router.put("/:id",contatosControllers.atualizar);
  
  // endpoint: /contatos/id
  // DELETE: Deletar um contato por id
  router.delete("/:id", contatosControllers.deletar);

module.exports = router;