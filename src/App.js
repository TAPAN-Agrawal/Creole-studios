import { useState } from "react";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);
  const [userno, SetUserno] = useState();

  const getInputValue = e => {
    SetUserno(Number(e.target.value));
  };

  const increment = () => {
    setCount(count + userno);
  };

  const decrement = () => {
    setCount(count - userno);
  };

  console.log(count);
  return (
    <div className="App">
      <h1
        style={{
          color: count > 100 ? "green" : count < -100 ? "red" : " black",
        }}
      >
        {count}  
      </h1>

      <button onClick={decrement}>-</button>
      <input type="number" onChange={getInputValue} />
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
