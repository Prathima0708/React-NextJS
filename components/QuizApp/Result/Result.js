import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Result.module.css'

const Result = ({name,score}) => {
    
    const router=useRouter()
    useEffect(()=>{
if(!name){
router.push('/')
}
    },[name,router])
  return (
    <div className={styles.result}>

 <span className={styles.title}>Final Score : {score}</span>
    </div>
  )
}

export default Result