import React, { useRef } from 'react'
import useStore from '../../../pages/Zustand Example/store'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Input = () => {
    const inputRef=useRef()
    const addperson=useStore(state=>state.addPeople)
    const add=()=>{
addperson(inputRef.current.value)
    }
  return (
    <div>Add People
        <br />
       <input id="standard-basic" label="Add People" variant="standard" ref={inputRef}/>
     <div className='mt-5'>
     <button   onClick={add}>Add People</button>
     </div>
       
    </div>
  )
}

export default Input