import { useState } from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>lorem ipusm</p>
      <Contador />
    </div>
  );
};

const Contador = () => {
  const [counter, seCounter] = useState(0);
  const handleCounter = () => {
    seCounter(counter + 1);
  };
  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleCounter}>Increment</button>
    </div>
  );
};

export default Home;
