const express = require('express');
const router = express.Router();
const { MutationController } = require('../controllers');
const { MutationService } = require('../services');
const mutationController = new MutationController(new MutationService());

router.post('/', mutationController.processMutation);

module.exports = router;