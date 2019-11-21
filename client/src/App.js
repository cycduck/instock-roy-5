import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header/Header';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
      </div>
    </Router>
  );
}

export default App;
