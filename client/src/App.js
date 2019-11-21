import React from 'react';
import './App.scss';
import axios from 'axios'
import Warehouse from './warehouse/Warehouse';
import Inventory from './delete/Inventory';
import InventoryData from './delete/Inventorylist';

export default class App extends React.Component {
  state = {
    inventoryData: [],
  }

  // componentDidMount(){
  //   //getting inventory data from backend
  // axios.get('http://localhost:8080/inventory')
  // .then(response => {
  //   // console.log('Got Inventory Data:', response.data)
  //   this.setState({
  //     inventoryData: response.data,

  //   })
  // })
  // .catch(error =>{
  //   alert(error)
  // });
  // }
  render() {
    return (
      <div className="App">
        <Warehouse inventory={this.inventory}/>

        {/* <Inventory/>
        <InventoryData data = {this.state.inventoryData} /> */}
      </div>
    );
  }
}