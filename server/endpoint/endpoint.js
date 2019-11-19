const express = require('express');

//import data
const inventoryData = require ('../data/inventory.json')

// K: PATH: /test
// const test = (request, response) => {
//   console.log('testing path works');
//   response.status(200).send('testing path works')
// }

//PATH: /inventory
const inventory = (request, response) => {
  console.log('inventory data sent')
  response.status(200).send(inventoryData);
}
module.exports = {
  // K: put function names here with commas
  inventory
}