import './App.css';

import { useState } from 'react';

import logo from './logo.svg';
import Counter from '~/components/Counter';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
      <Counter count={count} />
      <Login />
      <Register />
    </div>
  );
}

export default App;
