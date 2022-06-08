import React, { useState } from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import Categories from "../Data/Categories";
import { useRouter } from "next/router";
import ErrorMessage from "../ErrorMessage";

const Home = ({name,setName,fetchQuestions,setShow}) => {
  const [category,setCategory]=useState("")
  const [difficulty,setDifficulty]=useState("")
  const [error,setError]=useState(false)

  const router=useRouter()

  const handleSubmit=()=>{
    if(!category || !difficulty || !name){
      setError(true)
      return
    }
    else{
      setError(false)
      fetchQuestions(category,difficulty)
      // router.push('/quiz')
      setShow(true)
    }
  }
  return (
    <div className={styles.content}>
      <div className={styles.settings}>
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className={styles.settings_select}>
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
          <TextField
            id="standard-basic"
            label="Enter your name"
            variant="standard"
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e)=>setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e)=>setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
        {/* <Image className={styles.banner} src='/quiz.svg' layout='fill' objectFit='contain'/> */}
      </div>
      <img
        src="https://png.pngtree.com/png-vector/20220525/ourmid/pngtree-megaphone-banner-quiz-png-image_4729445.png"
        className={styles.banner}
        alt="quiz app"
      />
      
    </div>
  );
};

export default Home;
