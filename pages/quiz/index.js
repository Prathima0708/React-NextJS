import React, { useEffect, useState } from 'react'

const MainQuiz = ({name,score,questions,setQuestions,setScore}) => {
    const [options,setOptions]=useState()
    const [currQues,setCurrQues]=useState(0)
    useEffect(() => {
        setOptions(
          questions &&
            handleShuffle([
              questions[currQues]?.correct_answer,
              ...questions[currQues]?.incorrect_answers,
            ])
        );
      }, [currQues, questions]);
      console.log(options)
      const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
      };
  return (
    <div>
Quiz Page
    </div>
  )
}

export default MainQuiz