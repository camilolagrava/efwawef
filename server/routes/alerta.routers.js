const express = require('express');
const router = express.Router();

const alerta = require('../controllers/alerta.controller');
router.get('/',alerta.getAlertas);
router.post('/',alerta.createAlerta);
router.get('/:id',alerta.getAlerta);
router.put('/:id', alerta.editAlerta);
router.delete('/:id', alerta.deleteAlerta);

module.exports = router;