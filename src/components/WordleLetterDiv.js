import React, { useEffect, useState } from "react";

export default function WordleLetterDiv(props) {
  const { generatedWord, enteredFive, positionCounting, stateOfWords } = props;

  const splitArray = generatedWord[0].split("");
  const splitWords = stateOfWords.split("");

  const colorIt = (e, index) => {
    // console.log(e === splitWords[index]);
    if (enteredFive) {
      if (e === splitWords[index]) {
        return "green_bg";
      } else if (stateOfWords.includes(e)) {
        // console.log()
        return "yellow_bg";
      }
    }
  };

  console.log(stateOfWords, " stringu");

  return (
    <div className="horizontal_line">
      {splitArray.map((e, index) => (
        <div className={"letter_square " + colorIt(e, index)} key={index}>
          {splitWords[index]}
        </div>
      ))}
    </div>
  );
}
