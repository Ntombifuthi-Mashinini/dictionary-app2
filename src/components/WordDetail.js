import React from "react";

export default function WordDetail({ meanings }) {
  return (
    <div>
      {meanings.map((meaning, index) => {
        return (
          <div key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            <p>{meaning.definition}</p>
          </div>
        );
      })}
    </div>
  );
}