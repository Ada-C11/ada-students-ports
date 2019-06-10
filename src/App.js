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
        <Student fullName="Ada Lovelace" email="ada@adadev.org" />
        <Student />
        {/* Fill out my full name and email! */}
        <Student />
        {/* Fill out my full name and email! */}
        <Student />
        {/* Fill out my full name and email! */}

      </main>

    </div>
  );
}

export default App;
