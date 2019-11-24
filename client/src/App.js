import React from 'react';
import './App.scss'
// import applications modules
import Warehouse from './components/Warehouse/Warehouse';
import Inventory from './components/Inventory/Inventory';


import Modal from './components/Modal'
import ModalWH from './components/modalWH'
// setup for react router

export default class App extends React.Component{

  state = {
    isModal : false,
    // temp change Chris' to false
    isModalWH: false
  }

  handleModal = () => {
      this.setState({ isModal: !this.state.isModal });
  }
  handleModalWH = () => {
    this.setState({
      isModalWH: !this.state.isModalWH
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.handleModal}>open modal</button>
        <button onClick={this.handleModalWH}>open warehouse modal</button>
        <Modal isModal={this.state.isModal}/>
        <ModalWH isModalWH={this.state.isModalWH}/>
      </div>
    );
  }
}