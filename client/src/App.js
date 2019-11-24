import React from 'react';
import axios from 'axios';

// import application component
import Warehouse from '../src/components/Warehouse/Warehouse';

import './App.css';

// setup for react router

export default class App extends React.Component {
    state = {
      warehouseInfo: [],
    }

    componentDidMount() { 
      //get the warehouse info from the server 
      axios.get('http://localhost:8080/warehouse')
        .then(response => {
          // console.log('WarehouseInfo:', response.data)
           this.setState({
             warehouseInfo: response.data,

           })
          //  console.log('double checking:', this.state.warehouseInfo)
        })
        .catch(error => {
          alert(error)
        })
      }
    render() {
    return (
      <>
        <div className="App">
          <Warehouse />
          {/* <InventoryData data = {this.state.inventoryData} /> */}
        </div>
      </>
    )}}
