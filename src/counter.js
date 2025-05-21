export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `Contador esta ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 100));
  setCounter(20);
}
