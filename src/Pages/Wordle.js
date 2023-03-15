import Keyboard from "react-simple-keyboard";
import React, { useEffect, useState } from "react";
import "react-simple-keyboard/build/css/index.css";
import "../styling/Wordle.css";
import WordleLetterDiv from "../components/WordleLetterDiv";
import Navbar from "../components/Navbar";
import randomWords from "random-words";

export default function Wordle() {
  const [layoutName, setLayoutName] = useState();
  const [input, setInput] = useState("");
  const [generatedWord, setGeneratedWord] = useState();
  const arrayOfWords = new Array(6).fill("");
  const [stateOfWords, setStateOfWords] = useState(arrayOfWords);
  const [positionCounting, setPositionCounting] = useState(0);
  const [enteredFive, setEnteredFive] = useState(false);

  useEffect(() => {
    let word = randomWords({ exactly: 1, maxLength: 5 });

    while (word[0].length < 5) {
      word = randomWords({ exactly: 1, maxLength: 5 });
    }

    setGeneratedWord(word);
  }, []);

  console.log(generatedWord);

  const keyPress = (e) => {
    setEnteredFive(false);
    const newArray = [...stateOfWords];
    const needsNewRow = stateOfWords[positionCounting].length > 4;

    if (needsNewRow && e === "{enter}") {
      setPositionCounting(positionCounting + 1);
      setEnteredFive(true);
    } else {
      newArray[positionCounting] += e;
    }

    if (e === "{enter}") {
      return;
    }

    setStateOfWords(newArray);
  };

  return (
    <>
      <div> inputu: {input}</div>
      <Navbar />
      <div className="keyboard_container">
        {generatedWord &&
          arrayOfWords.map((string, index) => (
            <div key={index}>
              <WordleLetterDiv
                stateOfWords={stateOfWords[index]}
                positionCounting={positionCounting}
                generatedWord={generatedWord}
                enteredFive={enteredFive}
              />
            </div>
          ))}

        <Keyboard
          // keyboardRef={(r) => (this.keyboard = r)}
          layoutName={layoutName}
          // onChange={changeIt(e)}
          layout={{
            default: [
              "q w e r t y u i o p",
              "a s d f g h j k l {enter}",
              "z x c v b n m",
            ],
          }}
          onKeyPress={(e) => keyPress(e)}
        />
      </div>
    </>
  );
}
