import React from 'react'
import styles from './Definition.module.css'

const Definition = ({word,meanings,category}) => {
  return (
    <div className={styles.meanings}>
        {word===""?<span className={styles.subTitle}>Start by typing a word in search</span>:(
       meanings.map((mean)=>(
          mean.meanings.map((item)=>(
              console.log(item)
          ))
       ))
        )}
    </div>
  )
}

export default Definition