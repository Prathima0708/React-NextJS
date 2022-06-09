import React, { useEffect } from 'react'

const SearchAfterSomeTime = () => {
    const [value, setValue] = React.useState("");

    const handleOnChange = (event) => {
      setValue(event.target.value);
    };
    useEffect(() => {
        const timeoutId = setTimeout(
          () => console.log(`Search function called: "${value}"`),
          300
        );
        return () => clearTimeout(timeoutId);
      }, [value]);
  return (
   <>
     <input onChange={handleOnChange} value={value} placeholder="Search" />
      <h1>{value}</h1>
   </>
  )
}

export default SearchAfterSomeTime