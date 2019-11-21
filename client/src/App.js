import React from 'react';
import './App.scss';
import axios from 'axios'
import Warehouse from './warehouse/Warehouse';
import Inventory from './delete/Inventory';
import InventoryData from './delete/Inventorylist';

export default class App extends React.Component {
  state = {
    inventoryData: [],
    warehouseInvent: []
  }

  warehouseInvent = (warehouseId) => {
    axios.get(`http://localhost:8080/warehouse/${warehouseId}/inventory`)
    .then(response => {
      console.log('receive inventory data by warehouse', response.data)
      this.setState({
        warehouseInvent: response.data
      })
    })
  }
  componentDidMount(){
    //getting inventory data from backend
  axios.get('http://localhost:8080/inventory')
  .then(response => {
    // console.log('Got Inventory Data:', response.data)
    this.setState({
      inventoryData: response.data,
    })
  })
  .catch(error =>{
    console.log(error)
  });
  console.log(!this.state.warehouseInvent)
  // if(!this.state.warehouseInvent) {
    this.warehouseInvent('W0');
  // }

  }
  render() {
    return (
      <div className="App">
        <Warehouse warehouseInvent={this.state.warehouseInvent}/>
        {/* <Inventory/>
        <InventoryData data = {this.state.inventoryData} /> */}
      </div>
    );
  }
}