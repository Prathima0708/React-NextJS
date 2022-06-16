import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div>
      <h1> {count} </h1>
      <br />
      {count / 2}
    </div>
  );
};

export default Counter;

// import React from "react";
// const data = { name: "John", age: 42 };
// const Counter = () => {
//   return <pre>{JSON.stringify(data, null, 2)}</pre>;
// };

// export default Counter;
