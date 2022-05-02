import React from 'react'
import useStore from '../../../pages/Zustand Example/store'

const People = () => {
    const people=useStore(state=>state.people)
  return (
    <div>
        <p>We have {people.length} people in our DB</p>
        <ul className='mt-9'>
            {people.map((person)=>(
                <li>{person}</li>
            ))}
        </ul>
    </div>
  )
}

export default People