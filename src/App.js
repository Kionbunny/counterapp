import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1); // Allows count to go below 0

  return (
    <div>
      <h1>Counter App</h1>
      {/* Added data-testid for count display */}
      <p data-testid="count">Count: {count}</p>
      
      {/* Added data-testid for buttons */}
      <button data-testid="increment-button" onClick={increment}>
        Increment
      </button>
      <button data-testid="decrement-button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default CounterApp;
