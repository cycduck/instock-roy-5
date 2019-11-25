const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(express.json());
router.use(cors());


module.exports = router;