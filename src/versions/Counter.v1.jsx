import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('effect ran');
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
