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

async function generateContent(text) {
    const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: text }] }],
        generationConfig,
    }); 
    const response = await result.response;
    const iatext = response.text();
    return iatext;
}

module.exports = { generateContent };
