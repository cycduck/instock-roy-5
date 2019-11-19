const express = require('express');
const location = require('../data/locations.json');
const nanoId = require('nanoid');

// K: PATH: /test
const test = (request, response) => {
  console.log('testing path works');
  response.status(200).send('testing path works')
}

const postWarehouse = (request, response) => {
  console.log('receiving object and posting new warehouse');
  const data = response.body;
  //checks if any of the data sent is undifined or empty
  data.forEach(item => {if(item === undefined || item === " "){
    response.status(404).send(`${item} field is empty`)
  }});
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
  location.unshift(newWarehouse);
}
module.exports = {
  // K: put function names here with commas
  test,
  postWarehouse
}