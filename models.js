const mongoose = require("mongoose");

// Define Schema
const jokeSchema = new mongoose.Schema({
    joke: String,
});

// Create Model
const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;
