import React, { useEffect, useReducer, useCallback } from "react";
import "../../styling/Keyboard.css";
import "../../styling/Wordle.css";
import {
  KeyboardContainer,
  KeyboardRow,
  KeyboardKey,
} from "./KeyBoardStyledComponent";

const initialBgColors = {
  greenBg: [],
  yellowBg: [],
  grayBg: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_colors":
      return {
        ...state,
        greenBg: [...new Set([...state.greenBg, ...action.green])],
        yellowBg: [...new Set([...state.yellowBg, ...action.yellow])],
        grayBg: [...new Set([...state.grayBg, ...action.gray])],
      };
    case "restart_game":
      return {
        greenBg: [],
        yellowBg: [],
        grayBg: [],
      };
  }
};

export default function KeyBoard(props) {
  const { generatedWord, positionCounting, stateOfWords, keyPress } = props;

  const [keysBgColor, dispatch] = useReducer(reducer, initialBgColors);

  const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter"],
    ["Z", "X", "C", "V", "B", "N", "M", "Backspace"],
  ];

  const handleKeyDown = (e) => {
    console.log(e.key);
  };

  useEffect(() => {
    const guessedWordLetters = stateOfWords[positionCounting - 1]?.split("");

    if (!guessedWordLetters) {
      dispatch({ type: "restart_game" });
    }

    const gray = [];
    const green = [];
    const yellow = [];

    guessedWordLetters?.map((letter, index) => {
      if (positionCounting === 0) return;

      if (letter === generatedWord[index]) {
        green.push(letter);
      } else if (generatedWord.includes(letter)) {
        yellow.push(letter);
      } else {
        gray.push(letter);
      }
    });

    dispatch({ type: "add_colors", green, yellow, gray });
  }, [positionCounting]);

  const keyboardChangeBg = useCallback(
    (keyboardKey) => {
      const colorMap = {
        greenBg: "green_bg",
        yellowBg: "yellow_bg",
        grayBg: "gray_bg",
      };

      for (const entry of Object.entries(keysBgColor || {})) {
        const [bgClass, keys] = entry;
        if (keys.includes(keyboardKey)) {
          return `${colorMap[bgClass]} `;
        }
      }

      return "";
    },
    [keysBgColor]
  );

  return (
    <KeyboardContainer>
      {keyboardRows.map((row, index) => (
        <KeyboardRow key={index}>
          {row.map((keyboardKey) => (
            <button
              key={keyboardKey}
              className={
                //   `keyboard__key ${
                //   keyboardKey === "Backspace" ? "keyboard__key--wide" : ""
                // }`
                KeyboardKey
              }
              value={keyboardKey}
              onClick={(e) => keyPress(e)}
            >
              {keyboardKey}
            </button>
          ))}
        </KeyboardRow>
      ))}
    </KeyboardContainer>
  );
}
