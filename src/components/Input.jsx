export default function Input({
  title,
  userInputData,
  inputIdentifier,
  onChangeValue,
}) {
  return (
    <p>
      <label htmlFor="">{title}</label>
      <input
        type="number"
        value={userInputData}
        required
        onChange={(event) => onChangeValue(inputIdentifier, event.target.value)}
      />
    </p>
  );
}
