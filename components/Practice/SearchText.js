import React, { useEffect, useState } from 'react'
const people = [
    "Shashi Koshy",
  "Dhriti Taneja",
  "Dipa Mishra",
  "Ansh Thakkar",
  "Lakshmi Thaker",
  "Sushila Matthai",
  "Shresth Nigam",
  "Bhavana Biswas",
  "Vasudha Mangat",
  "Priya Saran"
  ];
const SearchText = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    useEffect(() => {
      const results = people.filter((person) =>
        person.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }, [searchTerm]);
  return (
    <div>
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchText