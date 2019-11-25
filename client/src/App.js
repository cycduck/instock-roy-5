import React from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';
import Inventory from './components/Inventory/Inventory';
import Location from './components/Location/Location';
import WarehouseInfo from './components/WarehouseInfo/WarehouseInfo';


export default class App extends React.Component {
  state = {
    isOpen : true,
    componentIsMounted : false,
  }

  async getLocation() {
    try{
        let locationData = await axios.get(`http://localhost:8080/warehouse`);
          this.setState({location : locationData.data})
    }
    catch(error) {
      alert(error);
    }
  }

  async getInventory() {
    try{
        let inventoryData = await axios.get(`http://localhost:8080/inventory`);
          this.setState({inventory : inventoryData.data})
    }
    catch(error) {
      alert(error);
    }
  }
  componentDidMount(){
    this.getLocation();
    this.getInventory();
    
  }
  
  render() {
    return (
      <div className="App">
          <Header/>
          <Inventory inventory={this.state.inventory}/>
          {/* <Location location={this.state.location}/> */}
          {/* <ProductPage product={this.object}/> */}
          {/* <WarehouseInfo/> */}
      </div>
    );
  }
}