const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/formulario', (req, res) => {
    res.sendFile(__dirname + '/inicial.html');
});

app.get('/chamaform', (req, res)=>{
    res.redirect('/formulario')
})

app.post('/processar-formulario', (req, res) => {
    const dadosFormulario = req.body;
    console.log('Dados do formulário recebidos:', dadosFormulario);
    
  // Adiciona os dados ao array
  dadosArray.push(dadosFormulario);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});