import React from 'react';

export default function Counter({ initialCount = 0 }) {
  const [count, setCount] = React.useState(initialCount);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}