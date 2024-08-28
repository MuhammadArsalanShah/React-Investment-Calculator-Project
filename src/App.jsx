import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

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
    console.log(typeof newValue);

    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [key]: newValue,
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
            userInputData = {userInput.initialInvestment}
            inputIdentifier = "initialInvestment"
            onValueChange={handleChange}
          />
          <Input
            title="annual investment"
            userInputData = {userInput.annualInvestment}
            inputIdentifier = "annualInvestment"
            onValueChange={handleChange}
          />
        </InputGroup>

        <InputGroup>
          <Input
            title="expected return"
            userInputData = {userInput.expectedReturn}
            inputIdentifier = "expectedReturn"
            onValueChange={handleChange}
          />
          <Input
            title="duration"
            userInputData = {userInput.duration}
            inputIdentifier = "duration"
            onValueChange={handleChange}
          />
        </InputGroup>
      </section>

      <section>
        <Table>
          <tr>
            <td>1</td>
            <td>$17,100</td>
            <td>$500</td>
            <td>$900</td>
            <td>$16,200</td>
          </tr>
        </Table>
      </section>
      {}
    </main>
  );
}

export default App;
