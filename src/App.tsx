import React from 'react';
import './styles/App.css';
import WelcomePage from './components/WelcomePage';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit
        {' '}
        <code>src/App.tsx</code>
        {' '}
        and save to reload.
      </p>
      <WelcomePage />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
