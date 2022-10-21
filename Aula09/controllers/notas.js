const express = require('express');

const notas = [
    {
        "periodo": "2021/1",
        "disciplina": { "codigo": "ADS030", "nome": "Manutenção de Software e DevOps" },
        "a1": "5.2",
        "a2": "3.8",
        "a3": "4.8",
        "media": "5.0",
    },
    {
        "periodo": "2021/1",
        "disciplina": { "codigo": "ADS032", "nome": "Construção de Frontend" },
        "a1": "6.4",
        "a2": "4.6",
        "a3": "",
        "media": "5.3",
    },
    {
        "periodo": "2021/2",
        "disciplina": { "codigo": "ADS038", "nome": " Governança de TI" },
        "a1": "1.5",
        "a2": "6.5",
        "a3": "2.0",
        "media": "4.7",
    },
];

const faltas = [
    {
        "periodo": "2021/1",
        "disciplina": { "codigo": "ADS030", "nome": "Manutenção de Software e DevOps" },
        "total": "0",
        "porcentagem": "0",
    },
    {
        "periodo": "2021/1",
        "disciplina": { "codigo": "ADS032", "nome": "Construção de Frontend" },
        "total": "18",
        "porcentagem": "15",
    },

];

const boletos = [
    {
        "mensalidade": "01",
        "vencimento": "01/01/2022",
        "valor": "500.00",
        "situacao": "Pago",
    },
    {
        "mensalidade": "02",
        "vencimento": "01/02/2022",
        "valor": "500.00",
        "situacao": "Pago",
    },
    {
        "mensalidade": "03",
        "vencimento": "01/03/2022",
        "valor": "500.00",
        "situacao": "Em Atraso",
    },
];

const requerimentos = [
    {
        "disciplina": { "codigo": "ADS030", "nome": "Manutenção de Software e DevOps" },
        "periodo": "2021/1",
        "prova": "A1",
        "situacao": "Deferido",
        "argumentacao": "A questão 1 foi respondida conforme o material da disciplina.",
        "parecer": "A pontuação da questão foi revisada e a nota da prova atualizada."
    },
    {
        "disciplina": { "codigo": "ADS032", "nome": "Construção de Frontend" },
        "periodo": "2021/1",
        "prova": "A2",
        "situacao": "Indeferido",
        "argumentacao": "Favor reconsiderar a questão 2.",
        "parecer": "A resposta dada à questão é referente a outro assunto."
    },
];

function listar (req, res, next) {
    res.json({ msg: 'API Aluno Online' });
};

function exibir_notas (req, res, next) {
    res.json(notas);
};

function exibir_faltas (req, res, next) {
    res.json(faltas);
};

function exibir_boletos (req, res, next) {
    res.json(boletos);
};

function criar (req, res, next) {
    const id = Number(req.params.id);
    if (id > boletos.length) return next(createError(404, "Boleto não localizado!"));
    res.json(boletos[id]);
};

function exibir_requerimentos (req, res, next) {
    res.json(requerimentos);
};

function exibir_requerimentos_id (req, res, next) {
    const id = Number(req.params.id);
    if (id > requerimentos.length) return next(createError(404, "Requerimento não localizado!"));
    res.json(requerimentos[id]);
};

function criar_requerimento (req, res, next) {
    const novoRequerimento = {
        "disciplina": { "codigo": req.body.disciplina.codigo, "nome": req.body.disciplina.nome },
        "periodo": req.body.perido,
        "prova": req.body.prova,
        "argumentacao": req.body.argumentacao,
        "situacao": "Pendente"
    }
    requerimentos.push(novoRequerimento);
    res.status(201).json(novoRequerimento);
};

module.exports = {listar, exibir_notas, exibir_faltas, exibir_boletos, criar, exibir_requerimentos, exibir_requerimentos_id, criar_requerimento};