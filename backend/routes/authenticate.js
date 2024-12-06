const express = require('express');
const router = express.Router();

const authController = require('../controllers/authenticate');

router.post('/generateCode', authController.generateCode);

router.post('/authenticateCode', authController.authenticateCode)

module.exports = router;