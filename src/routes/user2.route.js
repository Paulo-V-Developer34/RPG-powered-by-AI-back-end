//nunca será chamado

const express = require('express');
const router = express.Router();
require('dotenv').config();
const { generateContent } = require('../services/user.service');

router.post('/teste2', async (req, res) => {
    console.log("deu certo o teste2");
    let resposta = req.body.texto;
    console.log(resposta);
    // res.json({ message: `${JSON.stringify(resposta)}` });

    try {
        const result = await generateContent(resposta);
        console.log("deu certo 3");
        console.log(result)
        console.log(typeof(result))
        res.json({ message: `${result}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao gerar conteúdo' });
    }
});

module.exports = router;