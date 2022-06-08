import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Home from './Home/Home';
import MainQuiz from './MainQuiz/MainQuiz';
import styles from './Quiz.module.css'

const Quiz = () => {
  const [name,setName]=useState("")
  const [questions,setQuestions]=useState()
  const [score,setScore]=useState(0)
  const [show,setShow]=useState(false)
  const fetchQuestions=async(category='',difficulty='')=>{
const {data}=await axios.get(`https://opentdb.com/api.php?amount=10${category &&`&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
setQuestions(data.results)
  }
  return (
    <>
    <div className={styles.app}  >
       <Header /> 
    <Home name={name} setName={setName} fetchQuestions={fetchQuestions} setShow={setShow} />
 {show && <MainQuiz name={name}  questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>}
    
     {/* <Link href='/Quiz'>Quiz</Link>
     <Link href='/Quiz/results'>Results</Link> */}
    </div>
    <Footer />
    </>
  )
}

export default Quiz