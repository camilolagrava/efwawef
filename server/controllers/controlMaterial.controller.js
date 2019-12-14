const ControlMaterial  = require('../models/controlMaterial');
const controlMaterialCtrl = {};

controlMaterialCtrl.getControlMateriales = async (req , res) => {
    const controlMaterial = await ControlMaterial.find();
    res.json(controlMaterial);
};

controlMaterialCtrl.createControlMaterial = async (req, res ) => {
    const controlMaterial = new ControlMaterial(req.body);
    await controlMaterial.save();
   res.json('ControlMaterial Guardado');
};

controlMaterialCtrl.getControlMaterial = async (req , res) => {
    const controlMaterial = await ControlMaterial.findById(req.params.id);
    res.json(controlMaterial);
};

controlMaterialCtrl.editControlMaterial = async (req , res) => {
    const{ id } = req.params;
    const controlMaterial ={
        codigo: req.body.codigo,
        observaciones: req.body.observaciones,
        oficina: req.body.oficina
    };

    await ControlMaterial.findByIdAndUpdate(id, {$set: controlMaterial}, {new: true});
    res.json({status: 'ControlMaterial Updatte'});

};

controlMaterialCtrl.deleteControlMaterial = async (req , res) => {
    await ControlMaterial.findByIdAndRemove(req.params.id);
    res.json({status: 'ControlMaterial Deleted'});
};
module.exports = controlMaterialCtrl;
