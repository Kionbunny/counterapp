import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  /// initally assign count variable as 0 becz user hasnt clicked any button
  const increment = () => {
    setCount(count + 1); ///a setter func to update the state of the variable
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count : {count}</p>
      {/*count state variable is dynamic it changes every time based on the event */}
      <button onClick={increment}>Increment</button>
      {/*attach the event handler to the button and pass the function as a reference  */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
