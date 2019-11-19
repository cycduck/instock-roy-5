const express = require('express');
const inventoryData = require('../data/inventory.json');

//PATH: /inventory
const inventory = (request, response) => {
  console.log('inventory data sent')
  response.status(200).send(inventoryData);
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


const inventGetItem = (request, response) => {
  const item = inventory.find(item => item.id === request.params.inventoryId) // Searches in the array and find the item of the matching ID
  if (item === -1) { // if not found send failure message
    response.status(404).send('Inventory with the ID cannot be found')
  } else { 
    response.status(200).send(item) 
  }
}

module.exports = {
  // K: put function names here with commas
  inventory,
  inventDelete,
  inventGetItem
}
