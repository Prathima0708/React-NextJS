import { MenuItem, TextField } from '@mui/material'
import React from 'react'
import styles from './Header.module.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import categories from './Data/category';

const Header = ({category,setCategory,word,setWord}) => {
   

const darkTheme = createTheme({
  palette: {
      primary:{
          main:'#fff'
      },
    mode: 'dark',
  },
});
const handleChange=(language)=>{
setCategory(language)
setWord("")
}
  return (
    <div className={styles.header}>
        <span className={styles.title}>{word?word:"Word Hunt"}</span>
        <div className={styles.inputs}>
            <ThemeProvider theme={darkTheme}>
            <TextField className={styles.search} label="Search a word" variant="standard" value={word} onChange={(e)=>setWord(e.target.value)} />
            <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            className={styles.select}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
            </ThemeProvider>
       
        </div>
    </div>
  )
}

export default Header