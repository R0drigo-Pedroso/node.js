/* Aprendendo sobre NPM  */
import chalk from 'chalk';

console.log(chalk.red('Trabalhando com NPM'));

let aluno = "Rodrigo";
let idade =14;

if(idade >=18){
    console.log(`${aluno} ${chalk.bgCyan('é maior de Idade!')}`);
}else {
    console.log(`${aluno} ${chalk.bgWhiteBright('é menor de Idade!')}`);
}