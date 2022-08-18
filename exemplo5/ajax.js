import fetch from 'node-fetch';

const url = `https://viacep.com.br/ws/01001000/json/`;

// Conectando com o endpoint da API (url)
fetch(url)

// Retornando a resposta como JSON
    .then(resposta => resposta.json())

// Exibindo a resposta (Obtida na API) no console
    .then(dados => console.log(dados));