const ControlBodega = require('../models/controlBodega');
const controlBodegaCtrl = {};

controlBodegaCtrl.getControlBodegas = async (req , res) => {
    const controlBodega = await ControlBodega.find();
    res.json(controlBodega);
};

controlBodegaCtrl.createControlBodega = async (req, res ) => {
    const controlBodega = new ControlBodega(req.body);
    await controlBodega.save();
   res.json('ControlBodega Guardado');
};

controlBodegaCtrl.getControlBodega = async (req , res) => {
    const controlBodega = await ControlBodega.findById(req.params.id);
    res.json(controlBodega);
};

controlBodegaCtrl.editControlBodega = async (req , res) => {
    const{ id } = req.params;
    const controlBodega ={
        codigo: req.body.codigo,
        observaciones: req.body.observaciones,
        supervisor:req.body.anio.supervisor,
        bodega:req.body.bodega
    };

    await ControlBodega.findByIdAndUpdate(id, {$set: controlBodega}, {new: true});
    res.json({status: 'ControlBodega Updatte'});

};

controlBodegaCtrl.deleteControlBodega = async (req , res) => {
    await ControlBodega.findByIdAndRemove(req.params.id);
    res.json({status: 'ControlBodega Deleted'});
};
module.exports = controlBodegaCtrl;
