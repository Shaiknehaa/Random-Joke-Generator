const mongoose = require("mongoose");
const Joke = require("./models"); // Ensure you have a Joke model

mongoose.connect("mongodb://127.0.0.1:27017/jokesdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const jokes = [
    { joke: "Why do programmers prefer dark mode? Because light attracts bugs!" },
    { joke: "Why was the JavaScript developer sad? Because he didn’t ‘null’ his feelings." },
    { joke: "A SQL query walks into a bar, walks up to two tables and asks: ‘Can I join you?’" },
    { joke: "Why don’t programmers like nature? It has too many bugs." },
    { joke: "How do you comfort a JavaScript bug? You console it." }
];

Joke.insertMany(jokes)
    .then(() => {
        console.log("Jokes added successfully!");
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
