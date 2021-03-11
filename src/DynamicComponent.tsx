import React, { useState } from "react";

export default function DynamicComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>UP</button>
      <span>{count}</span>
      <button onClick={() => setCount((x) => x - 1)}>DOWN</button>
    </div>
  );
}
