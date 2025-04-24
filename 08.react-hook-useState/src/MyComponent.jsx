import React, { useState } from "react"

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Spongebob");
  }

  const incrementAge = () => {
    setAge(age + 1);
  }
  const decrementAge = () => {
    setAge(age - 1);
  }

  const toggleEmployStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return (<div>
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name</button>

    <p>Age: {age}</p>
    <button onClick={decrementAge}>Decrement Age</button>

    <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
    <button onClick={toggleEmployStatus}>Toggle Employ Status</button>
  </div>);
}

export default MyComponent