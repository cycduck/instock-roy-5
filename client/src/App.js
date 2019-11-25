import React from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';
import Inventory from './components/Inventory/Inventory';
import Location from './components/Location/Location';
import WarehouseInfo from './components/WarehouseInfo/WarehouseInfo';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { identifier, isFor, isNode } from '@babel/types';


export default class App extends React.Component {
  state = {
    isOpen : true,
    componentIsMounted : false
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

  async getWarehouseInvent(warehouseId) {
    console.log(warehouseId)
    try{
      let warehouseInvent = await axios.get(`http://localhost:8080/warehouse/${warehouseId}/inventory`)
      this.setState({
        warehouseInvent: warehouseInvent
      })
      console.log(this.state)
    }
    catch(error) {
      alert(error);
    }
  }

  componentDidMount(){
    this.getLocation();
    this.getInventory();
    
  }
  
  inventoryFilter = (inventoryId) => {
    if (this.state.inventory){
      console.log(this.state.inventory)
      return this.state.inventory.find(info => info.id === inventoryId)
    }
  }
  
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Header/>
            <Switch>
              
              <Route path="/warehouse/:warehouseId/inventory" exact render={(routerProps)=> <WarehouseInfo 
                  {...routerProps} 
                  warehouse={this.getWarehouseInvent(routerProps.match.params.warehouseId)} 
                  // inventory={this.getLocationInvent(routerProps.match.params.warehouseId)}
                />} 
              />

              <Route path="/warehouse/" exact render={(routerProps)=> <Location location={this.state.location}/>}/>

              {/* <Route path="/inventory/:inventoryId" exact component={ProductPage}/>}/> */}
              <Route path="/inventory/:inventoryId" exact render={(routerProps)=> <ProductPage {...routerProps} product={this.inventoryFilter(routerProps.match.params.inventoryId)}/>}/>
              {/* <Route path="/inventory/:inventoryId" exact render={(routerProps)=> <ProductPage product={this.getInventorySingle(routerProps.params.match.inventoryId)}/>}/> */}

              <Route path="/" exact render={(routerProps)=> <Inventory inventory={this.state.inventory}/>}/>
              {/* <Inventory inventory={this.state.inventory}/> */}
              {/* <Location location={this.state.location}/> */}
              {/* <ProductPage product={this.object}/> */}
              {/* <WarehouseInfo/> */}
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}