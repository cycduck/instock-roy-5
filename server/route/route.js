const express = require('express');
const app = express();
const router = express.Router();
const endptInvent = require('../endpoint/endptInventory');
const endptWare = require('../endpoint/endptWarehouse');

router.get("/warehouse", endptWare.warehouse);
router.get("/warehouse/:warehouseId/inventory", endptWare.warehouseInvent)
router.post("/warehouse", endptWare.postWarehouse);

router.get('/inventory', endptInvent.inventory)
router.post('/inventory', endptInvent.postToInventory)
router.delete("/inventory/:inventoryId", endptInvent.inventDelete);




module.exports = router;
