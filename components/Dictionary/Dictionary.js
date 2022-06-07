import { Container } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Definition from './definitions/Definition'
import Header from './Header'

const Dictionary = () => {
    const [meanings,setMeanings]=useState([])
    const [word,setWord]=useState("")
    const [category,setCategory]=useState("en")
    const dictionaryAPI=async()=>{
try{
const data=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
setMeanings(data.data)
}catch(error){
    console.log(error)
}
    }
// console.log(meanings)
    useEffect(()=>{
dictionaryAPI()
    },[word,category])
  return (
      <div style={{height:'100vh',backgroundColor:'#282c34',color:'white'}}>
   <Container maxWidth='md' className='flex flex-col h-screen'>
<Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
{meanings && <Definition word={word} meanings={meanings} category={category}/>}
   </Container>
   </div>
  )
}

export default Dictionary