let dolar = 5.09;
let dolar10 = 10 * dolar;

console.log(`$U$ 10 equivalente a R$ ${dolar10}`);
console.log('----------------------------------------------------');


let aluno = 'chaves';
let nota1 = 7.58;
let nota2 = 9.12;
let media = (nota1 + nota2) / 2;

console.log(nota1, nota2, media);
console.log('----------------------------------------------------');

let situacao;
    if (media >=7) {
        situacao = 'Aprovado';
    } else {
        situacao = 'Reprovado';
    }

console.log(`O Aluno ${aluno} apresentou a média ${media} e foi ${situacao}`);

console.log('----------------------------------------------------');

var dados = {
    nome: 'Bento',
    idade: 23,
}

// console.log(dados);
console.table(dados);
console.log(dados.nome);
console.log(dados.idade);