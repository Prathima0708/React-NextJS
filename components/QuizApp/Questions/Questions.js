import { Button } from "@mui/material";
import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import styles from "./Question.module.css";
import { useRouter } from "next/router";

const Questions = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
}) => {
  const router = useRouter();
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return styles.select;
    } else {
      if (selected === i && selected !== correct) {
        return styles.wrong;
      } else if (i === correct) {
        return styles.select;
      }
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      router.push("/quiz/results");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected("");
    } else {
      setError("Please select an option first");
    }
  };
  const handleQuit = () => {};
  return (
    <div className={styles.question}>
      <h1>Question {currQues + 1}</h1>
      <div className={styles.singleQuestion}>
        <h2>{questions[currQues]?.question}</h2>
        <div className={styles.options}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                key={i}
                disabled={selected}
                className={`styles.singleOption + ${
                  selected && handleSelect(i)
                }`}
                onClick={() => handleCheck(i)}
              >
                {i}
              </button>
            ))}
        </div>
        <div className={styles.controls}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: "185" }}
            href="/"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained" className='text-black bg-blue-400'
            color="primary"
            size="large"
            style={{ width: "185" }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
