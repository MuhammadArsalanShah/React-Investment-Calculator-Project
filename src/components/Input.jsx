export default function Input({ title, userInputData, inputIdentifier, onValueChange }) {
  return (
    <p>
      <label htmlFor="">{title}</label>
      <input
        type="number"
        value={userInputData}
        required
        onChange={(event) => onValueChange(inputIdentifier, event.target.value)}
      />
    </p>
  );
}
