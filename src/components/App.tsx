import { useState } from "react";
import "./App.scss";
export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        <span>+</span>
      </button>
      {count}
      <button onClick={() => setCount(count - 1)}>
        <span>-</span>
      </button>
    </div>
  );
};
