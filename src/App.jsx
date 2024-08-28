import InputGroup from "./components/InputGroup.jsx";
import Input from "./components/Input.jsx";

function App() {
  return (
    <main>
      <section id="user-input">
        <InputGroup>
          <Input title="initial investment" inputIdentifier="initialInvestment" />
          <Input title="annual investment" inputIdentifier="annualInvestment"/>
        </InputGroup>

        <InputGroup>
          <Input title="expected return" inputIdentifier="expectedReturn"/>
          <Input title="duration" inputIdentifier="duration"/>
        </InputGroup>
      </section>
    </main>
  );
}

export default App;
