import React from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection';
import NameDisplay from './components/NameDisplay';
function App() {
  return (
    <div className="App">
      <header>
        <h2>Ada Students!</h2>
      </header>
      <main>
        <NameDisplay
          name="Bob Barker"
          displayName={true}
        />
        <StudentCollection />
      </main>

    </div>
  );
}

export default App;
