const express = require('express')
const app = express()

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

app.use("/login", userRoute);

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

//para iniciar o programa escreva "npm run dev", para parar escreva "?"