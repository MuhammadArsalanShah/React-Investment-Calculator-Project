import { useState } from "react";


import InputGroup from "./components/InputGroup.jsx";
import Input from "./components/Input.jsx";
import Table from "./components/Table.jsx";

const inputData = {
  initialInvestment: 1000,
  annualInvestment: 300,
  expectedReturn: 5,
  duration: 3,
};

function App() {
  const [userInput, setUserInput] = useState(inputData);
  
  function handleChange(key, newValue) {

    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [key]: +newValue,
      };
    });

    console.log("user input is:", userInput);
  }

  return (
    <main>
      <section id="user-input">
        <InputGroup>
          <Input
            title="initial investment"
            userInputData={userInput.initialInvestment}
            inputIdentifier="initialInvestment"
            onChangeValue={handleChange}
          />
          <Input
            title="annual investment"
            userInputData={userInput.annualInvestment}
            inputIdentifier="annualInvestment"
            onChangeValue={handleChange}
          />
        </InputGroup>

        <InputGroup>
          <Input
            title="expected return"
            userInputData={userInput.expectedReturn}
            inputIdentifier="expectedReturn"
            onChangeValue={handleChange}
          />
          <Input
            title="duration"
            userInputData={userInput.duration}
            inputIdentifier="duration"
            onChangeValue={handleChange}
          />
        </InputGroup>
      </section>

      <Table userData={userInput} />
      
    </main>
  );
}

export default App;
