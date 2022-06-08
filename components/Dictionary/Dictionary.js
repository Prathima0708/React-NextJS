import { Container, Switch } from '@mui/material'
import { grey } from '@mui/material/colors'
import { withStyles } from '@mui/styles'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Definition from './definitions/Definition'
import Header from './Header/Header'

const Dictionary = () => {
    const [meanings,setMeanings]=useState([])
    const [word,setWord]=useState("")
    const [category,setCategory]=useState("en")
    const [lightMode,setLightMode]=useState(false)
    const DarkMode = withStyles({
        switchBase: {
          color: grey[50],
          "&$checked": {
            color: grey[900],
          },
          "&$checked + $track": {
            backgroundColor: grey[500],
          },
        },
        checked: {},
        track: {},
      })(Switch);


    const dictionaryAPI=async()=>{
try{
const data=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
setMeanings(data.data)
}catch(error){
    console.log(error)
}
    }
console.log(meanings)
    useEffect(()=>{
dictionaryAPI()
    },[word,category])
  return (
      <div style={{height:'100vh',backgroundColor:lightMode ? '#fff':'#282c34',color:lightMode?'black':
      'white',transition:'all 0.5s linear'}}>
   <Container maxWidth='md' style={{display:'flex',flexDirection:'column',height:'100vh',justifyContent:'space-evenly'}}>
       <div style={{position:'absolute',top:0,right:15,paddingTop:10}}>
           <span>{lightMode ? "Dark":"Light"} mode</span>
<DarkMode checked={lightMode} onChange={()=>setLightMode(!lightMode)}/>
       </div>
<Header category={category} setCategory={setCategory} word={word} setWord={setWord} lightMode={lightMode}/>
{meanings && <Definition word={word} meanings={meanings} category={category} lightMode={lightMode}/>}
   </Container>
   </div>
  )
}

export default Dictionary