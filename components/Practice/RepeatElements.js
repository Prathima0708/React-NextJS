import React from 'react'

const RepeatElements = () => {
    let inputFields = [];
    for (let i = 0; i < 5; ++i) {
      inputFields.push(
        <div> Field {i}: <input type="text" placeholder="Search"  /> </div>
      );
    }
  return (
    <>
      <h2> Repeat an element n times using JSX </h2>
      <div>{inputFields}</div>
    </>
  )
}

export default RepeatElements