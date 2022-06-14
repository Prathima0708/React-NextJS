import React from "react";

const REACT_VERSION = React.version;
const ReactVersion = () => {
  return (
    <div>
      <h1>React version: {REACT_VERSION}</h1>
    </div>
  );
};

export default ReactVersion;
