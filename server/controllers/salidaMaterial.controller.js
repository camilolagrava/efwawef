const SalidaMaterial = require('../models/salidaMaterial');
const salidaMaterialCtrl = {};

salidaMaterialCtrl.getSalidaMateriales = async (req , res) => {
    const salidaMaterial = await SalidaMaterial.find();
    res.json(salidaMaterial);
};

salidaMaterialCtrl.createSalidaMaterial = async (req, res ) => {
    const salidaMaterial = new SalidaMaterial(req.body);
    await salidaMaterial.save();
   res.json('SalidaMaterial Guardado');
};

salidaMaterialCtrl.getSalidaMaterial = async (req , res) => {
    const salidaMaterial = await SalidaMaterial.findById(req.params.id);
    res.json(salidaMaterial);
};

salidaMaterialCtrl.editSalidaMaterial = async (req , res) => {
    const{ id } = req.params;
    const salidaMaterial ={
        codigo: req.body.codigo,
        cantidad: req.body.cantidad,
        oficina: req.body.mes,
        funcionario: req.body.anio
    };

    await SalidaMaterial.findByIdAndUpdate(id, {$set: salidaMaterial}, {new: true});
    res.json({status: 'SalidaMaterial Updatte'});

};

salidaMaterialCtrl.deleteSalidaMaterial = async (req , res) => {
    await SalidaMaterial.findByIdAndRemove(req.params.id);
    res.json({status: 'SalidaMaterial Deleted'});
};
module.exports = salidaMaterialCtrl;
