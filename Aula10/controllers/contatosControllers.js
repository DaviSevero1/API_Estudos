const contatosModel = require('../models/contatosModel');


const listar = (req, res) => {
    const contatos = contatosModel.listar();
    return res.json(contatos);
}

const listarID = (req, res) => {
    const { id } = req.params;
    const nomeLocalizado = contatosModel.consultar(id);
    return res.json({
      nome: nomeLocalizado
    });
}

const criar = (req, res) => {
    
    const nome = req.body.nome;
    const novoContato = contatosModel.criar(nome);
    return res.json(novoContato);
  
}

const atualizar = (req, res) => {
    const { id } = req.params;
    const contatoModificado = contatosModel.editar(id,nome);
    return res.json(contatoModificado);
}

const deletar = (req, res) => {
    const { id } = req.params;
    const contatoDeletado = contatosModel.deletar(id);
    return res.json(contatoDeletado);
}

module.exports = {listar, listarID, criar, atualizar, deletar}