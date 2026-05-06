import React from "react";
import WordDetail from "./WordDetail";

export default function Results({ results }) {
  return (
    <div className="card">
      <h2>{results.word}</h2>
      <WordDetail meanings={results.meanings} />
    </div>
  );
}