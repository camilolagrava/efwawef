const Irregularidad = require('../models/irregularidad');
const irregularidadCtrl = {};

irregularidadCtrl.getIrregularidades = async (req , res) => {
    const irregularidad = await Irregularidad.find();
    res.json(irregularidad);
};

irregularidadCtrl.createIrregularidad = async (req, res ) => {
    const irregularidad = new Irregularidad(req.body);
    await irregularidad.save();
   res.json('Irregularidad Guardado');
};

irregularidadCtrl.getIrregularidad = async (req , res) => {
    const irregularidad = await Irregularidad.findById(req.params.id);
    res.json(irregularidad);
};

irregularidadCtrl.editIrregularidad = async (req , res) => {
    const{ id } = req.params;
    const irregularidad ={
        codigoControl: req.body.codigoControl,
        codigoMaterial: req.body.codigoMaterial,
        cantidad: req.body.cantidad,
        tipo: req.body.tipo
    };

    await Irregularidad.findByIdAndUpdate(id, {$set: irregularidad}, {new: true});
    res.json({status: 'Irregularidad Updatte'});

};

irregularidadCtrl.deleteIrregularidad = async (req , res) => {
    await Irregularidad.findByIdAndRemove(req.params.id);
    res.json({status: 'Irregularidad Deleted'});
};
module.exports = irregularidadCtrl;
