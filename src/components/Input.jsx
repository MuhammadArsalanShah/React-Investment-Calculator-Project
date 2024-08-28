import { useState } from "react";

const inputData = {
  initialInvestment: 1000,
  annualInvestment: 300,
  expectedReturn: 5,
  duration: 3
}

export default function Input({ title, inputIdentifier }) {
  const [userInput, setUserInput] = useState(inputData);

  function handleChange(key, newValue) {
   
    console.log(typeof newValue)

    setUserInput(prevInput => {
      return {
        ...prevInput,
        [key]: newValue

      }
    })

    console.log('user input is:',userInput);
  }

  

  return (
    <p>
      <label htmlFor="">{title}</label>
      <input
        type="number"
        value={userInput[inputIdentifier]}
        required
        onChange={(event) => handleChange(inputIdentifier, event.target.value)}
      />
    </p>
  );
}
