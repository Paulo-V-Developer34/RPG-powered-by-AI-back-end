const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

async function generateContent(text) {
    const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text }] }],
        generationConfig,
    }); 
    return result;
}

module.exports = { generateContent };
