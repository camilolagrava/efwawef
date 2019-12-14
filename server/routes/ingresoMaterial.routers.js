const express = require('express');
const router = express.Router();

const ingresoMaterial = require('../controllers/ingresoMaterial.controller');
router.get('/',ingresoMaterial.getIngresoMateriales);
router.post('/',ingresoMaterial.createIngresoMaterial);
router.get('/:id',ingresoMaterial.getIngresoMaterial);
router.put('/:id', ingresoMaterial.editIngresoMaterial);
router.delete('/:id', ingresoMaterial.deleteIngresoMaterial);

module.exports = router;