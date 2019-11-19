import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import applications modules
import Warehouse from './components/Warehouse/Warehouse';
import Inventory from './components/Inventory/Inventory';

import './App.css';

// setup for react router

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/Warehouse/:id"></Link>
      <Link to="/Inventory/:id"></Link>
    </nav>
    <h1>React Routes are ready to go!</h1>
    <Switch>
      <Route path="/" exact component={Warehouse} />
      <Route path="/Warehouse" component={Warehouse} />
      <Route path="/Inventory" component={Inventory} />
    </Switch>
  </BrowserRouter>

  );
}

export default App;
