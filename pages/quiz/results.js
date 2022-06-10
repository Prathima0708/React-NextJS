import { Button } from '@mui/material'
import React from 'react'
import Result from '../../components/QuizApp/Result/Result'

const results = () => {
  return (
 <>
 <h1>Thank you</h1>
 <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
       Start again
      </Button>
 </>
  )
}

export default results