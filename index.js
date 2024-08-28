const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const userRoute = require('./src/routes/user.route')

//const userRouter = require()

const port = 3000

//Isso é uma rota
    //utiliza o método http
    //toda rota possui
        //nome
        //função (callback)
            //dentro da função podem haver diferentes métodos utilizados para a manipulação de informações, como um CRUD
                // GET (PEGA UMA INFO)
                // POST (ENVIA UMA INFO)
                // PUT (MODIFICA TODAS AS INFOS DENTRO DE UMA INFO)
                // PATH (MODIFICA UMA (OU ALGUMAS) INFOS DENTRO DE UMA INFO)
                // DELETE (DELETA UMA INFO)
  //Se dismembrarmos o código abaixo podemos dizer que ".get" é o método http, o nome é o '/' e a função é aquela function ali em baixo "function (req, res) {...}"
  //app.get('/', function (req, res) { //o '/' é o "local" em que o usuário está, poderiamos colocar 'home' por exemplo
  //  res.send('Bye World')
  //})

// Middleware para parsear o corpo das requisições
// app.use(bodyParser.urlencoded({ extended: true })); //esse aqui só serve se o formulário for mandado diretamente para cá (formato "application/x-www-form-urlencoded")
app.use(bodyParser.json());

// Rota para receber dados do formulário
app.post('/submit-form', (req, res) => {    //esse código nunca vai ser executado pois seria necessário que o form chamasse ele
    const formData = req.body;
    console.log('Dados recebidos:', formData);

    // Enviar uma resposta de volta para o front-end
    res.json({ message: 'Dados recebidos com sucesso!', data: formData });
});

app.use("/ai-chat", userRoute); //o form chamou esse código

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

//para iniciar o programa escreva "npm run dev", para parar escreva "?"