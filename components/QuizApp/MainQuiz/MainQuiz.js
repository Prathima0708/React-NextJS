import React, { useEffect, useState } from "react";
import styles from "./MainQuiz.module.css";
import { CircularProgress } from "@mui/material";
import Questions from "../Questions/Questions";

const MainQuiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);
  console.log(options);
  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };
  return (
    <div className={styles.quiz}>
      <span className={styles.subtitle}>Welcome,{name}</span>
      {questions ? (
        <>
          <div className={styles.quizInfo}>
            <span>{questions[currQues]?.category}</span>
            <span>Score : {score}</span>
          </div>
          <Questions
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default MainQuiz;
