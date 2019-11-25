const express = require('express');
const location = require('../data/locations.json');
const inventoryData = require('../data/inventory.json');
const nanoId = require('nanoid');

// PATH: /warehouse
const warehouse = (request, response) => {
  console.log('all warehouse data sent')
  response.status(200).send(location);
}

// PATH: /warehouse/:warehouseId/inventory
const warehouseInvent = (request, response) => {
  console.log('warehouse inventory requested, ID: ', request.params.warehouseId)
  const warehouseInvent = inventoryData.filter(info => info.warehouseId === request.params.warehouseId)  // Searches in the data and return the array that matches
  if (!warehouseInvent.length) { // array is empty
    response.status(404).send('Warehouse with the ID cannot be found')
  } else { 
    response.status(200).send(warehouseInvent) 
  }
}

const postWarehouse = (request, response) => {
  console.log('receiving object and posting new warehouse');
  const data = request.body;
  console.log(data)
  console.log(data.name)
  //checks if any of the data sent is undifined or empty

  const newWarehouse = {
    "id": nanoId(),
    "name": data.name,
    "address": {
        "street": data.address,
        "suiteNum": "suite 201",
        "city": "Toronto",
        "province": "Ontario",
        "postal": "M6N4B7"
    },
    "contact": {
        "name": data.contact.name,
        "title": data.contact.position,
        "phone": data.contact.phone,
        "email": data.contact.email
    },
    "inventoryCategories": data.categories
  }
  if(!data.name || !data.address || !data.contact.name || !data.contact.position || !data.contact.phone || !data.contact.email) {
    response.status(404).send('Item could not be added')
  } else {
    location.unshift(newWarehouse);
  }
}
module.exports = {
  // K: put function names here with commas
  warehouse,
  warehouseInvent,
  postWarehouse
}