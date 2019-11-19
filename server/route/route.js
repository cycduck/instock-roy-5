const express = require('express');
const router = express.Router();
const endptInvent = require('../endpoint/endptInventory');
const endptWare = require('../endpoint/endptWarehouse');



router.get("/warehouse", endptWare.test);
router.post("/warehouse", endptWare.postWarehouse);

// router.get("/", endpoint.test);
router.get('/inventory', endptInvent.inventory)
// K: PATH /inventory
router.delete("/inventory/:inventoryId", endptInvent.inventDelete);


module.exports = router;