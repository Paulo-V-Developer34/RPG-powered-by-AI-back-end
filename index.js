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


// // Importando as rotas
const user2Routes = require('./src/routes/user.route');
// // Usando as rotas
app.use('/aiapi', user2Routes);


app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

//para iniciar o programa escreva "npm run dev", para parar escreva "?"