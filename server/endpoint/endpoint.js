const express = require('express');


// K: PATH: /test
const test = (request, response) => {
  console.log('testing path works');
  response.status(200).send('testing path works')
}

module.exports = {
  // K: put function names here with commas
  test
}