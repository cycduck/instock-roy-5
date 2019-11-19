const express = require('express');
const router = express.Router();
const endptInvent = require('../endpoint/endptInventory');
const endptWare = require('../endpoint/endptWarehouse');


// K: PATH: /test
router.get("/", endptWare.test);

// K: PATH /inventory
router.delete("/inventory/:inventoryId", endptInvent.inventDelete);

router.get("/inventory/:inventoryId", endptInvent.inventGetItem)


module.exports = router;