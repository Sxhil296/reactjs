
import "./App.css";

function App() {

  //vanilla javascript
let counter = 6
const increaseValue = () => {
  console.log('increase', counter)
  counter = counter+1
}
const decreaseValue = () => {
  console.log('increase', Math.random())
}

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>
  );
}

export default App;
