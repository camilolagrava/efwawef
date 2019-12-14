const express = require('express');
const router = express.Router();

const salidaMaterial = require('../controllers/salidaMaterial.controller');
router.get('/',salidaMaterial.getSalidaMateriales);
router.post('/',salidaMaterial.createSalidaMaterial);
router.get('/:id',salidaMaterial.getSalidaMaterial);
router.put('/:id', salidaMaterial.editSalidaMaterial);
router.delete('/:id', salidaMaterial.deleteSalidaMaterial);

module.exports = router;