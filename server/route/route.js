const express = require('express');
const router = express.Router();
const endptInvent = require('../endpoint/endptInventory');
const endptWare = require('../endpoint/endptWarehouse');

router.get("/", endptWare.test);

// router.get("/", endpoint.test);
router.get('/inventory', endptInvent.inventory)

router.post('/inventory', endptInvent.postToInventory)

// K: PATH /inventory
router.delete("/inventory/:inventoryId", endptInvent.inventDelete);


module.exports = router;