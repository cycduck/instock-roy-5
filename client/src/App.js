import React from 'react';
import './App.scss'
import axios from 'axios';
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
    isModalWH: false,
    // modalWH: {}
  }

  // onChange = (e) => {
  //   console.log(e.target.name, e.target.value)
  //   this.setState({modalWH:{[e.target.name]:e.target.value}})
  //   // on change seems to work cuz it's targetting one thing, not target.[name].value
  // }
  

  handleModal = () => {
      this.setState({ isModal: !this.state.isModal });
  }
  handleModalWH = () => {
    this.setState({
      isModalWH: !this.state.isModalWH
    })
  }

  // postWarehouse = (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.warehouse.type)
  //   // console.log(e.target.warehouse.value)
  //   // console.log(e.target.address.value)
  //   // console.log(e.target.contact.value)
  //   // console.log(e.target.phone.value)
  //   // console.log(e.target.location.value)
  //   // console.log(e.target.position.value)
  //   // console.log(e.target.email.value)
  //   // console.log(e.target.category.value)
  //   Object.keys(this.state.modalWH).forEach(info => {
  //     console.log(!this.state.modalWH[info])
  //     if (!this.state.modalWH[info] || this.state.modalWH[info] === " " ){
  //       console.log('test')
  //     } 
  //   })
  // // if any of the values aren't empty, then submit
  // // if it is show an error 
  // }

  render(){
    return (
      <div>
        <ModalWH isModalWH={this.state.isModalWH} handleModalWH={this.handleModalWH} />
        <button onClick={this.handleModal}>open modal</button>
        <button onClick={this.handleModalWH}>open warehouse modal</button>
        <Modal isModal={this.state.isModal} />
      </div>
    );
  }
}