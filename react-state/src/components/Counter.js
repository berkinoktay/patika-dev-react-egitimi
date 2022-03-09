import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const artır = () => {
    setCounter(counter + 1);
  };
  const azalt = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={artır}>Artır</button>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
}

export default Counter;
