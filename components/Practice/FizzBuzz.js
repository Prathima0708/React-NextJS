import React, { useState } from 'react'

const FizzBuzz = () => {
    const [count, setCount] = useState(1)
    const handleDecrement=()=>{
        if (count > 1) {
            setCount((prevState) => (  prevState - 1 ));
          }
    }

    const handleIncrement=()=>{
        setCount((prevState) => (  prevState + 1 ));
    }
  return (
    <div>
        <h1> React Fizz Buzz </h1>
        <p> Counting incrementally, replacing any number divisible by three with
          the word "fizz", and any number divisible by five with the word
          "buzz". </p>

        <h2>
          {count % 15 === 0
            ? "FizzBuzz"
            : count % 3 === 0
            ? "Fizz"
            : count % 5 === 0
            ? "Buzz"
            : count}
        </h2>
        <button onClick={handleDecrement}> - </button>
        <button onClick={handleIncrement}> + </button>
      </div>
  )
}

export default FizzBuzz
