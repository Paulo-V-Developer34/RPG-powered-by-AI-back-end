const express = require('express');
const router = express.Router();
require('dotenv').config();
const { generateContent } = require('../services/user.service');

router.post('/ai-chat', async (req, res) => {
    console.log("deu certo 2");

    const { text } = req.body;

    try {
        const result = await generateContent(text);
        console.log("deu certo 3");
        res.json({ message: `${result}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao gerar conteúdo' });
    }
});

module.exports = router;
