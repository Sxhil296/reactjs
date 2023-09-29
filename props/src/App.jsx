import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "Patrick",
    age: "28",
  };
  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-800 rounded font-bold p-4 mb-4">Tailwind Test</h1>
      <Card username="Batman" someObj={myObj} newArr={myArr} />
      <Card username="Catwoman"/>
    </>
  );
}

export default App;
