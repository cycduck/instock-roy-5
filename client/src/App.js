import React, { Component } from 'react'
import axios from 'axios'
import './App.scss';
import Inventory from './inventory-list/Inventory';
import InventoryData from './inventory-data/InventoryData';


export default class App extends Component {
  state = {
    inventoryData: [],
    // dataId: []
  }

  componentDidMount(){
    //getting inventory data from backend
  axios.get('http://localhost:8080/inventory')
  .then(response => {
    // console.log('Got Inventory Data:', response.data)
    this.setState({
      inventoryData: response.data,
    //   dataId: response.data.map(item => { return item.id})
    })
  })
  .catch(error =>{
    alert(error)
  });
  }



  render() {
    // console.log(this.state.dataId)
    return (
      <div className="App">
        <Inventory/>
        <InventoryData data = {this.state.inventoryData} />
      </div>
    );
  }
}


