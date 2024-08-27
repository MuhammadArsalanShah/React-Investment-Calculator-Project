import InputGroup from "./components/InputGroup.jsx";
import Input from "./components/Input.jsx";

function App() {
  return (
    <main>
      <section id="user-input">
        <InputGroup>
          <Input title="initial investment" investmentKey="initialInvestment" />
          <Input title="annual investment" investmentKey="annualInvestment"/>
        </InputGroup>

        <InputGroup>
          <Input title="expected return" investmentKey="expectedReturn"/>
          <Input title="duration" investmentKey="duration"/>
        </InputGroup>
      </section>
    </main>
  );
}

export default App;
