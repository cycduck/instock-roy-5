const express = require('express');
const app = express();
const router = express.Router();
const endpoint = require('../endpoint/endpoint');

// K: PATH: /test
// router.get("/", endpoint.test);
router.get('/', endpoint.inventory)

module.exports = router;