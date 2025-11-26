export const writeMockFunction = (
  inputValue,
  count,
  setCount,
  setInputValue
) => {
  if (inputValue !== "") {
    setCount([...count, inputValue]);
    setInputValue("");
  }
};
