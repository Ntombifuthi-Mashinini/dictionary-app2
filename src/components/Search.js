import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  const apiKey = "4bf39f80fc9d48003o92t3a6c3d6d47a";

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a word..."
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {results && <Results results={results} />}
    </div>
  );
}