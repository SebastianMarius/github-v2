import React, { useEffect, useState, useRef } from "react";
import "react-simple-keyboard/build/css/index.css";
import "../../styling/Wordle.css";

import Navbar from "../../components/Navbar";
import randomWords from "random-words";
import LettersRow from "../../components/WordleLetterDiv";
import KeyBoard from "../../components/KeyBoard/KeyBoard";
import wordExists from "word-exists";
import { CenteredDiv } from "../../components/Common/SharedStyleComponents";

const arrayOfWords = Array(6).fill("");

export default function Wordle() {
  const [generatedWord, setGeneratedWord] = useState();
  const [userWords, setUserWords] = useState(arrayOfWords);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWinning, setIsWinning] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const resetGame = () => {
    setUserWords(arrayOfWords);
    setIsWinning(false);
    setCurrentIndex(0);
    generateRandomWord();
  };

  const generateRandomWord = () => {
    let words = randomWords({ exactly: 1, maxLength: 5 });

    while (words[0].length < 5) {
      words = randomWords({ exactly: 1, maxLength: 5 });
    }

    setGeneratedWord(words[0].toUpperCase());
  };

  useEffect(() => {
    generateRandomWord();
    document.addEventListener("keydown", (e) => {
      keyPress(e.key);
    });
    return () => {
      window.removeEventListener("keydown", (e) => {
        keyPress(e.key);
      });
    };
  }, []);

  const resetErrorMessage = () => {
    if (userWords[currentIndex]) {
      setShowErrorMsg(false);
    }
  };
  useEffect(resetErrorMessage, [userWords]);

  const stateOfWordsRef = useRef(userWords);

  useEffect(() => {
    stateOfWordsRef.current = userWords;
  }, [userWords]);

  const keyPress = (pressedKey) => {
    if (isWinning) {
      return;
    }

    console.log(pressedKey);
    const newArray = [...stateOfWordsRef.current];
    const needsNewRow = stateOfWordsRef.current[currentIndex].length > 4;

    if (pressedKey === "Backspace") {
      newArray[currentIndex] = newArray[currentIndex].slice(0, -1);
    }

    // debugger;
    if (pressedKey === "Enter" && needsNewRow) {
      const isWord = wordExists(newArray[currentIndex]);
      setShowErrorMsg(!isWord);

      if (!isWord) {
        newArray[currentIndex] = "";
      } else {
        console.log("current index intra n else");
        setCurrentIndex(currentIndex + 1);
      }

      if (newArray.includes(generatedWord)) {
        setIsWinning(true);
      }
    }

    if (pressedKey.length === 1) {
      console.log(currentIndex);
      newArray[currentIndex] += pressedKey.toUpperCase();
    }

    setUserWords(newArray);
  };

  return (
    <>
      <Navbar />
      <CenteredDiv flexDirection={"column"}>
        {generatedWord &&
          Object.values(arrayOfWords).map((string, index) => (
            <div key={index}>
              <LettersRow
                stateOfWords={userWords[index]}
                positionCounting={currentIndex}
                generatedWord={generatedWord}
                currentRow={index}
              />
            </div>
          ))}
      </CenteredDiv>

      <CenteredDiv flexDirection={"column"}>
        <KeyBoard
          stateOfWords={userWords}
          positionCounting={currentIndex}
          generatedWord={generatedWord}
          keyPress={(e) => keyPress(e.target.value)}
        />
        {showErrorMsg && <div> Cuvantu nu i in dex </div>}

        {isWinning && (
          <div>
            <span>user won</span>
            <button onClick={resetGame}> Restart </button>
          </div>
        )}
      </CenteredDiv>
    </>
  );
}
