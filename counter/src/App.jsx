
import { useState } from "react";
import "./App.css";

function App() {
//vanilla javascript
// let counter = 6
// const increaseValue = () => {
//   console.log('increase', counter)
//   counter = counter+1
// }
// const decreaseValue = () => {
//   console.log('increase', Math.random())
// }

const [count, setCount] = useState(0)
const increaseValue = () => {
  setCount(count +1)
}
const decreaseValue = () => {
  if (count != 0) {
    setCount(count -1)
  }
}
const increaseFive = () => {
  setCount(count + 5)
}


  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <button onClick={increaseFive}>Increase 5</button>
    </>
  );
}

export default App;
