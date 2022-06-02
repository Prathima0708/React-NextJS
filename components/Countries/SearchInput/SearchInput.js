import Search from '@mui/icons-material/Search'
import React from 'react'
import styles from './SearchInput.module.css'

const SearchInput = ({...rest}) => {
  return (
    <div className={styles.wrapper}>
     <Search color='inherit' />
     <input className={styles.input} {...rest} />
    </div>
  )
}

export default SearchInput