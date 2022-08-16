import http from 'http'; /* importa o modulo http nativo do nodejs (existe a partir da instalação do nodejs na maquina). Pegar as requisições de URL */

import fs from 'fs/promises'; /* fs assincrono (operações independentes, ocorrem em paralelo). FS = file system */

const monitorRequisicoes = (requisicao, resposta) => {
    /* arrow function (função anonima) */

    resposta.writeHead(200, {
        "content-type": "text/html; charset=utf-8"
    });

    switch(requisicao.url){
        case '/':
            fs.readFile("paginas/index.html").then(conteudo => resposta.end(conteudo));
            break;

        case '/sobre':
            fs.readFile("paginas/sobre.html").then(conteudo => resposta.end(conteudo));
            break;

        default:
            resposta.writeHead(404);
            fs.readFile("paginas/404.html").then(conteudo => resposta.end(conteudo));
    }
}

/* Criando um servidor baseado no modulo http que importamos acima e monitorando as requisições */
const servidor = http.createServer(monitorRequisicoes);

/* Iniciando o servidor */
servidor.listen(8080, () => {
    console.log('servidor rodando na porta 8080');
});