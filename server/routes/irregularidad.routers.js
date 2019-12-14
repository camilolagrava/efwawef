const express = require('express');
const router = express.Router();

const irregularidad = require('../controllers/irregularidad.controller');
router.get('/',irregularidad.getIrregularidades);
router.post('/',irregularidad.createIrregularidad);
router.get('/:id',irregularidad.getIrregularidad);
router.put('/:id', irregularidad.editIrregularidad);
router.delete('/:id', irregularidad.deleteIrregularidad);

module.exports = router;