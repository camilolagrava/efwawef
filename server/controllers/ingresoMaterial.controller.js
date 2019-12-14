const IngresoMaterial = require('../models/ingresoMaterial');
const ingresoMaterialCtrl = {};

ingresoMaterialCtrl.getIngresoMateriales = async (req , res) => {
    const ingresoMaterial = await IngresoMaterial.find();
    res.json(ingresoMaterial);
};

ingresoMaterialCtrl.createIngresoMaterial = async (req, res ) => {
    const ingresoMaterial = new IngresoMaterial(req.body);
    await ingresoMaterial.save();
   res.json('IngresoMaterial Guardado');
};

ingresoMaterialCtrl.getIngresoMaterial = async (req , res) => {
    const ingresoMaterial = await IngresoMaterial.findById(req.params.id);
    res.json(ingresoMaterial);
};

ingresoMaterialCtrl.editIngresoMaterial = async (req , res) => {
    const{ id } = req.params;
    const ingresoMaterial ={
        codigo: req.body.codigo,
        cantidad: req.body.cantidad,
        mes: req.body.mes,
        anio: req.body.anio,
        bodega: req.body.bodega
    };

    await IngresoMaterial.findByIdAndUpdate(id, {$set: ingresoMaterial}, {new: true});
    res.json({status: 'IngresoMaterial Updatte'});

};

ingresoMaterialCtrl.deleteIngresoMaterial = async (req , res) => {
    await IngresoMaterial.findByIdAndRemove(req.params.id);
    res.json({status: 'IngresoMaterial Deleted'});
};
module.exports = ingresoMaterialCtrl;
