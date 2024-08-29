const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors'); // Importe o middleware cors
const app = express()

const userRoute = require('./src/routes/user.route')

//porta
const port = 3000

//middlewares
// Use o middleware cors
app.use(cors());
app.use('/api', userRoute);
app.use(express.json());

// Rota para receber dados do formulário    //veja se esse código pode te ajudar a resolver o problema da formulário
app.post('/submit-form', (req, res) => {    //esse código nunca vai ser executado pois seria necessário que o form chamasse ele
    const formData = req.body;
    console.log('Dados recebidos:', formData);

    // Enviar uma resposta de volta para o front-end
    res.json({ message: 'Dados recebidos com sucesso!', data: formData });
});

// app.use("/ai-chat", userRoute); //o form chamou esse código
//teste
app.get('/ai-chat', (req, res) => {
    res.send('Rota /ai-chat funcionando!');
});


app.get('/teste', (req, res) => {
    res.send('Rota funcionando');
});



app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

//para iniciar o programa escreva "npm run dev", para parar escreva "?"