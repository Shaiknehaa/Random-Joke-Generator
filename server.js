const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/myJokesDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Define Joke Schema & Model
const jokeSchema = new mongoose.Schema({
  joke: String,
});
const Joke = mongoose.model("Joke", jokeSchema);

// API to get a random joke
app.get("/api/joke", async (req, res) => {
  const jokes = await Joke.find();
  if (jokes.length === 0) {
    return res.json({ joke: "No jokes found in the database!" });
  }
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});

// API to get all jokes
app.get("/api/jokes", async (req, res) => {
  const jokes = await Joke.find();
  res.json(jokes);
});

// API to add a joke
app.post("/api/jokes", async (req, res) => {
  const { joke } = req.body;
  if (!joke) {
    return res.status(400).json({ error: "Joke is required" });
  }
  const newJoke = new Joke({ joke });
  await newJoke.save();
  res.json({ message: "Joke added successfully!" });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
