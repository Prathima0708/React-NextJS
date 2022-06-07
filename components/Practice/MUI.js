import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { green, purple, red } from '@mui/material/colors';

// const value=window.innerWidth

const Responsive = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      color: green[500]
    },
    [theme.breakpoints.up("md")]: {
        color: purple[500]
      },
      [theme.breakpoints.up("lg")]: {
        color: red[500]
      },
   
  }));

const MUI = () => {
    const [w,setW]=useState(value)
    useEffect(()=>{
        const handleResize=()=>{
            setW(window.innerWidth)
        }
        window.addEventListener("resize",handleResize)
        return(()=>{
            window.removeEventListener("resize",handleResize)
        })
    },[])
  return (
    <Responsive>
        <Typography variant='h4'>Advanced Material UI</Typography>
        <Typography>{w} px</Typography>
    </Responsive>
  )
}

export default MUI