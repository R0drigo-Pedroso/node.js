import express from "express";
const app = express();

// Configurar a veiws engine com EJS, linha obrigatoria.
app.set('view engine', 'ejs');

// Configurando as rotas
app.get('/', (req, res) => {
    //res.send('Estamos aprendendo node.js');
    const bandas = ["bandas01", "bandas02", "bandas03", "bandas04", "bandas05", "bandas06", "bandas07"];
    res.render('index', {bandas});
});

app.get('/sobre/', (req, res) => {
    res.render('sobre');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

// Configurando o servidor
app.listen(8080, () => {
    console.log('Servidor Express rodando...')
});