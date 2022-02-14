import './App.css';

import React from 'react';
import Counter from '~/components/Counter/Counter';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <Counter count={count} />
      </header>
    </div>
  );
}

export default App;
