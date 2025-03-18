import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch("http://localhost:5000/api/joke")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))
      .catch((error) => console.error("Error fetching joke:", error));
  };

  return (
    <div className="joke-container">
      <h1>Joke App</h1>
      <p className="joke-text">{joke || "Click the button to get a joke!"}</p>
      <button onClick={fetchApi}>Get a Joke</button>
    </div>
  );
};

export default App;
