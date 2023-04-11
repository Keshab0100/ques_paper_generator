<<<<<<< HEAD
import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  })
)

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

userInterface.prompt()
userInterface.on("line", async input => {
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  })
  console.log(response.data.choice)
  userInterface.prompt()
})
=======
import { Configuration, OpenAIApi } from "openai"
import { config } from "dotenv"
import readline from "readline"
import express from 'express'
import cors from "cors"
import bodyParser from "body-parser"
const port = process.env.PORT || 8000;
config()

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
)

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: req.body.prompt }],
  })
  res.status(200).send(response.data.choices[0].message.content)
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
>>>>>>> b08d4fa48518151c1091e09f67e0b70cf9b45664
