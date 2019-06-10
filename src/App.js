import React from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Ada Students!</h2>
      </header>
      <main>
        <StudentCollection />
      </main>

    </div>
  );
}

export default App;
