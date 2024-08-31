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
  
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
    });
    const response = result.response;
    const iatext = response.text();
    return iatext;
  }
  
module.exports = { run };
