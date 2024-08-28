//const route = require("express").Router()

//route.get("/teste")

const express = require('express');
const router = express.Router();

require('dotenv').config();

// Exemplo de rota de login
router.post('/ai-chat', (req, res) => {
    //testando código
    console.log("deu certo 2")

    //atribuindo o valor
    const { text } = req.body;
    
    
    //inserindo cpodigo para a execução do gemini
    
    const {
        GoogleGenerativeAI,
        HarmCategory,
        HarmBlockThreshold,
        } = require("@google/generative-ai");
        
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
        
    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };
    
    const model = genAI.getGenerativeModel({     //OLHE BEM PARA VER SE DEVEMOS DESCOMENTAR O GENERATIONCONFIG
        model: "gemini-1.5-flash", //generationConfig // isso é opcional, mas caso não seja colocado a IA não vai se basear nessas configurações pois ela nunca será lida
    });
    
    async function run() {
        const parts = [
        {text: "input: crie para min um RPG espacial"},
        {text: "output: Você está em uma nave espacial, quando de repente houve um barulho no espaço.\no que você faz?\n\n1. olha pela janela\n2. tranca as portas\n3. se esconde"},            {text: "input: crie um rpg de sobrevivência"},
        {text: "output: Você está em uma floresta nevada, onde o perigo está presente o tempo inteiro. Você começa a sentir fome.\nO que você faz?\n\n1. procura comida na floresta\n2. procura comida no rio\n3. procura uma caverna"},
        {text: "input: "},
        {text: "output: "},
        ];
        
        const result = await model.generateContent({
        contents: [{ role: "user", parts: [{text:`${text}`}] }],
        generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
        });
        
        console.log("deu certo 3")

    //retorno da mensagem
        res.json({ message: `${result}` });
    }
        
    run();
});

module.exports = router;
