import React, { useEffect, useState } from 'react'
import styles from './MainQuiz.module.css'
import { CircularProgress } from '@mui/material';

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
<span className={styles.subtitle}>
Welcome,{name}
</span>
{
    questions?(
<>
Questions
</>
    ):(
      <CircularProgress/>  
    )
}
    </div>
  )
}

export default MainQuiz


