const express = require('express');
const router = express.Router();

const proovedor = require('../controllers/proovedor.controller');
router.get('/',proovedor.getProovedores);

router.post('/',proovedor.createProovedor);
router.get('/:id',proovedor.getProovedor);
router.put('/:id', proovedor.editProovedor);
router.delete('/:id', proovedor.deleteProovedor);

module.exports = router;