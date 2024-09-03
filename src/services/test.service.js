const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 892,
    responseMimeType: "text/plain",
};

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

  async function run2(text) {

    //   start = true
    //   const response = result.response;
    //   const iatext = response.text();
    //   var firstiatext = iatext
    //   return iatext
    
    
    console.log("O teste foi iniciado")
    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "Crie um RPG" }],
            },
            {
                role: "model",
                parts: [{ text: "Você está em uma floresta densa, caminhando em busca de algum tesouro perdido, porém você escuta um barulho alto vindo um pouco distante na região mais escura da floresta.\nO que você faz?\n1. foge\n2. tenta ver o que é\n3. se esconde" }],
            },
        ],
    });
    

      // let partstext = {text: "input: "+text}

      const result = await chat.sendMessage(text);
    //   result = "primeira opção"
    //   result = "primeira opção"
      const response = result.response;
      const iatext = response.text();
      console.log(iatext)
      return iatext;
  }
  
module.exports = { run2 };
