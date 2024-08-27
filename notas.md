# projeto MERN

## React

1. Remova os componentes CSS runtime, pois pode prejudicar a experiência de usuário
2. Analise "Vanilla Extract"

## Json

1. os comentários não são permitidos no arquivo json ;-; (você que lute para entender kkkk)
2. posso usar o "run" para rodar scripts estilizados (que eu mesmo inventei) no terminal, um exemplo do do npm: npm run dev
3. o npm run dev que se refere ao dev que está dentro do "script" do package.json serve para que o site atualiza automaticamente, como um live server, para isso ele chama o nodemon com "nodemon index".
4. diferentemente do npm start, que é nativo do express, o "dev", que não é nativo (qualquer não nativo se classifica aqui), precisa utilizar o "run" para rodar através do terminal

## npm

1. nem sei o que é isso kkkk

## node_modules

1. ele trabalha juntamente com o package-lock.json, ambos fazem parte do **express** , um framework ou uma dependencia do node.js, facilitando a vida dos devs
2. o código "const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen" é utilizado para chamar todas as funções dentro da framework express

1. Nodemon é outra dependencia do node.js e ele permite a atualização contínua da página em relação ao código

## Node.js

1. O Node.js é um framework para o JS que permite-o funcionar como um back-end

## JS

1. função "call-back" ??? (aparentemente é uma function sem nome)

## Aplicação (site)

1. para entrar nele basta digitar "<http://localhost:3000/>" no navegador, detalhe, o "3000" é a porta utilizada, talvez seu projeto tenha utilizado uma porta diferente no index.js
2. **midwares** vão ficar entre as controllers e as rotas, eles vão prevenir erros e dar segurança à aplicação

## arquivo MD

1. use o link dentro das setas "<google.com>"

## etc

### terminal

1. utilize "ctrl + C" para finalizar a execução do código no terminal

### git ignore

1. ele ignora o arquivo ou pasta selecionada, a fim de que o arquivo não atrapalhe nas ações do git

### notas temporárias e urgentes

1. quais são os conceitos do encapsulamento
2. conceito do que são módulos
3. funções de seta
