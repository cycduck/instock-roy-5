const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(cors());


module.exports = router;