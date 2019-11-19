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
    {/* <nav>
      <Link to="/warehouse/:id"></Link>
      <Link to="/inventory/:id"></Link>
    </nav> */}
    <h1>React Routes are ready to go!</h1>
    <Switch>
      <Route path="/" exact component={Warehouse} />
      <Route path="/warehouse" component={Warehouse} />
      <Route path="/inventory" component={Inventory} />
    </Switch>
  </BrowserRouter>

  );
}

export default App;
