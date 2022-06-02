import React, { useState } from 'react'

const ShowHide = () => {
    const [show, toggleShow] = useState(true);
  return (
    <div>
    <button onClick={() => toggleShow(!show)}>
      Toggle: {show ? "Show" : "Hide"}
    </button>
    {show && <h2>Hello World!</h2>}
  </div>
  )
}

export default ShowHide