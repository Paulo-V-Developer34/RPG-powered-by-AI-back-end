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

let start = false

  
  async function run(text) {
    const parts = [
      {text: "você é um mestre de RPG e cria histórias de mundos RPG sem magia, mas com muita criatividade em ficção cientifica, você não pode responder a comentários que sejam fora deste tema. Seus RPGs são cheios de emoção com personagens cativantes e situações perigosas onde uma decisão errada pode levar o jogador à morte."},
      {text: "input: crie um RPG"},
      {text: "output: Você está em uma floresta densa, caminhando em busca de algum tesouro perdido, porém você escuta um barulho alto vindo um pouco distante na região mais escura da floresta.\nO que você faz?\n1. foge\n2. tenta ver o que é\n3. se esconde"},
      {text: "input: crie para min um RPG espacial"},
      {text: "output: Você está em uma nave espacial, quando de repente houve um barulho no espaço. \nO que você faz?. \n1. olha pela janela. \n2. tranca as portas\n3. se esconde"},
      {text: "input: crie um RPG de sobrevivência"},
      {text: "output: Você está em uma floresta nevada, onde o perigo está presente o tempo inteiro. Você começa a sentir fome.\nO que você faz?\n1. procura comida na floresta\n2. procura comida no rio\n3. procura uma caverna"},
      {text: "input: "+text},
      {text: "output: "},
    ];

    if (start == false) {
      

      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
      });

      start = true
      const response = result.response;
      const iatext = response.text();
      var firstiatext = iatext
      return iatext
    } else {
      console.log("O Chat já foi iniciado :D")
      const chat = model.startChat({
        history: [ 
          {
            role: "user",
            parts: [{ text: "Crie um RPG" }],
          },
          {
            role: "model",
            parts: [{ text: firstiatext }],
          },
        ],
      });

      // let partstext = {text: "input: "+text}

      const result = await chat.sendMessage(text);
      const response = result.response;
      const iatext = response.text();
      console.log(iatext)
      return iatext;
    }
  }
  
module.exports = { run };
