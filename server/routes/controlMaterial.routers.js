const express = require('express');
const router = express.Router();

const controlMaterial = require('../controllers/controlMaterial.controller');
router.get('/',controlMaterial.getControlMateriales);
router.post('/',controlMaterial.createControlMaterial);
router.get('/:id',controlMaterial.getControlMaterial);
router.put('/:id', controlMaterial.editControlMaterial);
router.delete('/:id', controlMaterial.deleteControlMaterial);

module.exports = router;