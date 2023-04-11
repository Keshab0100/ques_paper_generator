const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "",
});

const openai = new OpenAIApi(config);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  try {
    const prompt = req.body.prompt || "Hello, how are you?";
    const response = await openai.Completion.create({
      engine: "davinci",
      prompt,
      maxTokens: 200,
      n: 1,
      stop: "\n",
    });
    const text = response.choices[0].text;
    res.send(text);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while generating text.");
  }
});
