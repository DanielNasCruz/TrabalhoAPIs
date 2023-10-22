const express = require('express');
const app = express();

const apicache = require('apicache');
let cache = apicache.middleware;
app.use(cache('5 minutes'));


/*
const crypto = require('crypto');
let pessoasData = [
    { Nome:'Joao', idade: 30, cidade: 'Belo Horionte'},
    { Nome:'Maria', idade: 30, cidade: 'Contagem'},
    { Nome:'Daniel Nascimento', idade: 30, cidade: 'Ribeirão das Neves'},
   { Nome:'Enzo', idade: 30, cidade: 'Betim'}
];

let pessoasETag = generateETag(pessoasData);

app.get('/pessoas', (req, res) => {
 const clientETag = req.header('If-None-Match');
 
 if (clientETag && clientETag === pessoasETag) {
   res.status(304).end(); // Retorna 304 se o ETag do cliente coincide com o ETag do servidor
 } else {
   res.setHeader('ETag', pessoasETag);
   res.status(200).json(pessoasData);
 }
});

function generateETag(data) {
 const hash = crypto.createHash('sha1');
 hash.update(JSON.stringify(data));
 return `"${hash.digest('base64')}"`;
}*/

const pessoas = [ 
    { Nome:'Joao', idade: 30, cidade: 'Belo Horionte'},
    { Nome:'Maria', idade: 30, cidade: 'Contagem'},
    { Nome:'Daniel Nascimento', idade: 30, cidade: 'Ribeirão das Neves'},
    { Nome:'Enzo', idade: 30, cidade: 'Betim'},
]

const carros = [ 
    { Nome:'Pulse', Ano: 2023, Marca: 'Fiats'},
    { Nome:'Jetta', Ano: 2021, Marca: 'Volkswagen'},
    { Nome:'Polo', Ano: 2019, Marca: 'Volkswagen'},
    { Nome:'Gol', Ano: 2000, Marca: 'Volkswagen'},
]

const animais = [
    { Nome:'Cobra', Classe:'Réptil'},
    { Nome:'Rato', Classe:'Mamífero'},
    { Nome:'Raposa', Classe:'Mamífero'},
]

app.get('/pessoas', (req, res) => {
   res.status(200).json(pessoas);
});


app.get('/carros', (req, res) => {
    res.status(200).json(carros);
});

app.get('/animais', (req, res) => {
    res.status(200).json(animais);
});

app.listen(3000, () => console.log('server started'));