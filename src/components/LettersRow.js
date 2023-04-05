import React, { useEffect, useState } from "react";

export default function LettersRow(props) {
  const {
    generatedWord,
    keyPress,
    currentRow,
    positionCounting,
    stateOfWords,
  } = props;

  const generatedWordLetters = generatedWord.split("");
  const guessedWord = stateOfWords.split("");

  const getLetterStyle = (letter, index) => {
    if (currentRow === positionCounting || !guessedWord[index]) {
      return;
    }

    if (letter === guessedWord[index]) {
      return "green_bg";
    } else if (generatedWord.includes(guessedWord[index])) {
      return "yellow_bg";
    } else if (!generatedWordLetters.includes(guessedWord[index])) {
      return "red_bg";
    }
  };

  return (
    <div className="horizontal_line">
      {generatedWordLetters.map((letter, index) => (
        <div
          className={"letter_square " + getLetterStyle(letter, index)}
          key={index}
        >
          {guessedWord[index]}
        </div>
      ))}
    </div>
  );
}
