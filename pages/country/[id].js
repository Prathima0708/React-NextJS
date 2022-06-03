import React from 'react'
import Layout from '../../components/Countries/Layout/Layout'
import styles from './country.module.css'


const Country = ({country}) => {
    console.log(country)
  return (
    <Layout title={country.name}>
        <div>
            <div className={styles.overview_panel}>
                <img src={country.flag}/>
                <h1>{country.population}</h1>
            </div>
        </div>
    </Layout>
  )
}



export const getServerSideProps=async({params})=>{
    const res=await fetch(`https://restcountries.com/v2/alpha/${params.id}`)
    const country=await res.json()
    return{
        props:{
            country
        }
    }
}

export default Country