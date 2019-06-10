import React from 'react';
import './App.css';
import Student from './components/Student'

function App() {
  return (
    <div className="App">
      <header>
        <h2>Ada Students!</h2>
      </header>
      <main>
        <Student />
        <Student />
        <Student />
        <Student />

      </main>

    </div>
  );
}

export default App;
