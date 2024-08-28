//const route = require("express").Router()

//route.get("/teste")

const express = require('express');
const router = express.Router();

// Exemplo de rota de login
router.post('/ai-chat', (req, res) => {
    //const { username, password } = req.body;
    //// Aqui você pode adicionar a lógica de autenticação
    
    //testando código
    alert(req.body)
    
    //inserindo cpodigo para a execução do gemini
    


    //retorno da mensagem
    res.json({ message: `mensagem: ${req.body}` });
});

module.exports = router;
