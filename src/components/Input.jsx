import { useState } from "react";

const inputData = {
  initialInvestment: 100,
  annualInvestment: 300,
  expectedReturn: 5,
  duration: 3
}

export default function Input({ title, investmentKey }) {
  const [numValue, setNumValue] = useState(inputData);

  function handleChange(event) {
    setNumValue(event.target.value)
  }

  console.log(investmentKey)

  return (
    <p>
      <label htmlFor="">{title}</label>
      <input
        type="number"
        value={numValue[investmentKey]}
        required
        onChange={handleChange}
      />
    </p>
  );
}
