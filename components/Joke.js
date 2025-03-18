import React, { useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState("Click the button to load a joke!");

  const fetchApi = () => {
    fetch("http://localhost:5000/api/joke")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))
      .catch((error) => console.error("Error fetching joke:", error));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Joke App</h2>
      <p>{joke}</p>
      <button onClick={fetchApi} style={{ padding: "10px", fontSize: "16px" }}>
        Get a Joke
      </button>
    </div>
  );
};

export default Joke;
