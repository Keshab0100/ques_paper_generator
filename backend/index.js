const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res)=>{
  console.log(process.env.API_KEY)
  res.json("message: hi")
})

app.post("/chat", async (req, res) => {
  try {
    const prompt = req.body.prompt || "Hello, how are you?";
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: prompt,
      maxTokens: 512,
      temperature: 0
    });
    const text = response.data.choices[0].text;
    res.send(text);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while generating text.");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
  console.log(process.env.API_KEY)
});