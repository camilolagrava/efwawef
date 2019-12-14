const express = require('express');
const router = express.Router();

const controlBodega = require('../controllers/controlBodega.controller');
router.get('/',controlBodega.getControlBodegas);
router.post('/',controlBodega.createControlBodega);
router.get('/:id',controlBodega.getControlBodega);
router.put('/:id', controlBodega.editControlBodega);
router.delete('/:id', controlBodega.deleteControlBodega);

module.exports = router;