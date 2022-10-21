const express = require("express");

const contatos = ["Daniel", "Kelly", "Jessica", "Marcos"];


const listar = () => {
    return [...contatos];
}

const listarID = (id) => {
    return contatos[id];
}

const criar = (nome)=>{
    contatos.push(nomeNovo);
    return{ id: contatos.lenght-1, nome: nomeNovo};
}

const atualizar = (id, nome) => {
    const contatoModificado = contatosModel.editar(id,nome);
    return res.json(contatoModificado);
}

const deletar = (id) => {
    
    const nomeRemovido = contatos.splice(id,1);
    return {id: id, nome: nomeRemovido};
}

module.exports = {listar, listarID, criar, atualizar, deletar}
