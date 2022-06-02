import React from 'react'
import styles from './CountriesTable.module.css'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const orderBy=(countries,direction)=>{
    if(direction==='asc'){
        return [...countries].sort((a,b)=>a.population>b.population?1:-1)
    }
    if(direction==='desc'){
        return [...countries].sort((a,b)=>a.population>b.population?-1:1)
    }
    return countries
    
}

const sortArrow=({direction})=>{
if(!direction){
    return <></>
}
if(direction==='desc'){
    return(
<div className={styles.heading_arrow}>
                <KeyboardArrowDownRoundedIcon color='inherit' />
                </div>
    )
    
}else{
    return(
        <div className={styles.heading_arrow}>
                <KeyboardArrowDownRoundedIcon color='inherit' />
                </div>
    )
}
}

const CountriesTable = ({countries}) => {
   const orderedCountries=orderBy(countries,"desc")
  return (
    <div>
        <div className={styles.heading}>
            <button className={styles.heading_name}>
                <div>Name</div>
                <div className={styles.heading_arrow}>
                <KeyboardArrowDownRoundedIcon color='inherit' />
                </div>
              
            </button>

            <button className={styles.heading_population}>
                <div>Population</div>
                <div className={styles.heading_arrow}>
                <KeyboardArrowDownRoundedIcon color='inherit'/>
                </div>
            </button>

        </div>
        {orderedCountries.map((country) => (
        
          <div className={styles.row}>
       
           
           
            <div className={styles.name}>{country.name.common}</div>

            <div className={styles.population}>{country.population}</div>

         
          </div>
    
      ))}
    </div>
  )
}

export default CountriesTable