const express = require('express');
const router = express.Router();
require('dotenv').config();
const { generateContent } = require('../services/user.service');

router.post('/ai-chat', async (req, res) => {
    console.log("deu certo 2");
    let msgFront = req.body
    console.log(typeof(msgFront))
    // const { texto } = req.body;

    try {
        const result = await generateContent(msgFront);
        console.log("deu certo 3");
        res.json({ message: `${result}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao gerar conteúdo' });
    }
});

module.exports = router;
