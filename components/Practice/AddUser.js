import React, { useState } from "react";

const AddUser = () => {
  const [text, setText] = useState("");
  const [user, setUser] = useState([]);
  function add() {
    const newlist = user.concat(text);
    setUser(newlist);
    setText("");
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={add}>Add</button>
      <div>{user.join(",")}</div>
    </div>
  );
};

export default AddUser;
