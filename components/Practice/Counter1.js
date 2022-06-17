// import React, { useState } from "react";

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Clicked {count} times</button>;
// }

// const Counter1 = () => {
//   return (
//     <>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </>
//   );
// };

// export default Counter1;

import React, { useState } from "react";

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
const Counter1 = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
};

export default Counter1;
