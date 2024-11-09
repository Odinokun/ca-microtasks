import { useState } from 'react';
import './App.css';

function App() {
  let [a, setA] = useState(1);

  const onClickHandler = () => {
    setA(++a);
  };

  const resetCounter = () => {
    setA(0);
  };

  return (
    <div className='App'>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>count ++</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  );
}

export default App;
