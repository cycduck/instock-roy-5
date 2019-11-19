const express = require('express');
const inventoryData = require('../data/inventory.json');
const nanoid = require('nanoid');

//PATH: /inventory
const inventory = (request, response) => {
  console.log('inventory data sent')
  response.status(200).send(inventoryData);
}

// POST request for new inventory item PATH:/inventory
const postToInventory = (request, response) =>{
  const newInventoryItem = {
      id: nanoid(5),
      name: request.body.name,
      description: request.body.description,
      quantity: request.body.quantity,
      lastOrdered: request.body.lastOrdered,
      location: request.body.location,
      isInstock: true,
      categories: "Footwear, Safety, Construction",
      warehouseId: 'W3'
};
if(!request.body.name || !request.body.quantity || !request.body.lastOrdered ||!request.body.location){
    response.status(400).send('Item could not be added')
  } else {
    inventoryData.push(newInventoryItem);
    response.status(200).send(newInventoryItem);
  }

}

// K: PATH /inventory/:inventoryId
const inventDelete = (request, response) => {
  console.log('request.params from inventory DELETE', request.params); // RETURN  { inventoryId: 'I5' }
  const i = inventoryData.findIndex(info => info.id === request.params.inventoryId) // Searches in the array and find the index of the matching ID
  if (i === -1) { // if not found send failure message
    response.status(404).send('Inventory with the ID cannot be found')
  } else { // If found at the index delete one item within inventory.json
    inventoryData.splice(i, 1)
    response.status(200).send(inventoryData) // Must return the new array as response
  }
  console.log('new inventory after inventory DELETE', inventoryData)
}

module.exports = {
  // K: put function names here with commas
  inventory,
  inventDelete,
  postToInventory
}
