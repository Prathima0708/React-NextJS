import React, { useState } from "react";

const ShowAlert = () => {
  const [phrase, setPhrase] = useState("");

  if (phrase === "Hello React") {
    alert("You may pass!");
  }
  return (
    <div>
      <h2>What's the secret phrase?</h2>

      <input
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="Enter a secret"
      />

      <p>
        Hint: It's <strong>Hello React</strong>
      </p>
    </div>
  );
};

export default ShowAlert;
