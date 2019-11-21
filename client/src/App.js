import React from 'react';
import './App.scss'
// import applications modules
import Warehouse from './components/Warehouse/Warehouse';
import Inventory from './components/Inventory/Inventory';


import Modal from './components/Modal'
// setup for react router

export default class App extends React.Component{

  state = {
    isModal : true
  }

  handleModal = () => {
      this.setState({ isModal: !this.state.isModal });
  }

  render(){
    return (
      <div>
        <button onClick={this.handleModal}>open modal</button>
        <Modal isModal={this.state.isModal}/>
      </div>
    );
  }
}