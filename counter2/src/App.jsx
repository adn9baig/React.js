import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5); // Initialize the counter state to 5

  // Add value function
  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1); // Use the functional update form
    } else {
      console.log("Cannot add value. Counter is at the max limit of 20.");
    }
  };

  // Remove value function
  const removeValue = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1); // Use the functional update form
    } else {
      console.log("Cannot remove value. Counter is already at the minimum limit of 0.");
    }
  };
  
  

  return (
    <>
     
      <h1>Counter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>

      <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
