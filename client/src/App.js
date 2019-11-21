import React from 'react';
import './App.scss';
import axios from 'axios'
import Warehouse from './warehouse/Warehouse';

export default class App extends React.Component {
  state = {
    inventoryData: [],
    warehouse: [],
    warehouseInvent: []
  }

  // TODO: warehouse ID needs to be passed from params.match
  getData = (warehouseId) => {
    axios.all([
      axios.get('http://localhost:8080/inventory'), // get all inventory
      axios.get(`http://localhost:8080/warehouse/${warehouseId}`), // getting warehouse by ID
      axios.get(`http://localhost:8080/warehouse/${warehouseId}/inventory`) // getting inventory by warehouse ID
    ]).then(axios.spread((inventory, warehouse, warehouseInvent) => {
      console.log(inventory, warehouse, warehouseInvent)
      this.setState({
        inventoryData: inventory.data,
        warehouse: warehouse.data,
        warehouseInvent: warehouseInvent.data
      })
    }))
  }



  componentDidMount(){
    this.getData('W0')

  }
  render() {
    return (
      <div className="App">
        <Warehouse warehouseData={this.state}/>
      </div>
    );
  }
}