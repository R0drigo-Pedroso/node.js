import express from "express";

const app = express();

// Configurar a veiw engine com EJS, linha obrigatoria.
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const bandas = ["banda01", "banda02", "banda03", "banda04", "banda05"];
    res.render('paginas/index', {bandas});
});

app.get('/sobre', (req, res) => {
    res.render('paginas/sobre');
});

app.get('/contato', (req, res) => {
    res.render('paginas/contato');
});

// Executando o servidor
app.listen(8080, () => {
    console.log("Servidor express rodando...");
});

// prepar para receber arquivo HTML
// Instalação do EJS - npm install ejs
