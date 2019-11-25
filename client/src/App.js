import React from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';
import Inventory from './components/Inventory/Inventory';
import Location from './components/Location/Location';
import WarehouseInfo from './components/WarehouseInfo/WarehouseInfo';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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

  async getWarehouseInfo(id){
    try{
        let warehouseInfo = await axios.get(`http://localhost:8080/warehouse/W1/inventory`);
        this.setState({
          warehouseInfo : warehouseInfo,
        })
    }
    catch(error) {
      alert(error);
    }
  }

  inventoryFind = (inventoryId) => {
    if(this.state.inventory){
      return this.state.inventory.find(info => info.id === inventoryId)
    }
  }
  
  warehouseFilter = (warehouseId) => {
    if(this.state.location){
      return this.state.location.find(location => location.id === warehouseId)
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
  
  handleDelete = (id) => {
    axios.delete(`http://localhost:8080/inventory/${id}`)
    .then((response) => {

    })
    this.getInventory()
}
  render() {
    return (
      <div className="App">

          <BrowserRouter>
            <Header/>
            <Switch>
              <Route path="/warehouse/" exact render={(routerProps)=> <Location location={this.state.location}/>}/>
              <Route path="/warehouse/:warehouseId/inventory" exact render={(routerProps)=><WarehouseInfo warehouse={this.warehouseFilter(routerProps.match.params.warehouseId)} inventory={this.state.inventory}/>}/>
              <Route path="/inventory/:inventoryId" exact render={(routerProps)=> <ProductPage product={this.inventoryFind(routerProps.match.params.inventoryId)}/>}/>
              <Route path="/" exact render={(routerProps)=> <Inventory inventory={this.state.inventory} handleDelete={this.handleDelete}/>}/>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}