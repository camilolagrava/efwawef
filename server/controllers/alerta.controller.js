const Alerta = require('../models/alerta');
const alertaCtrl = {};

alertaCtrl.getAlertas = async (req , res) => {
    const alerta = await Alerta.find();
    res.json(alerta);
};

alertaCtrl.createAlerta = async (req, res ) => {
    const alerta = new Alerta(req.body);
    await alerta.save();
   res.json('Alerta Guardado');
};

alertaCtrl.getAlerta = async (req , res) => {
    const alerta = await Alerta.findById(req.params.id);
    res.json(alerta);
};

alertaCtrl.editAlerta = async (req , res) => {
    const{ id } = req.params;
    const alerta ={
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        codigoMaterial:req.body.anio.codigoMaterial,
        cantidadMinima:req.body.cantidadMinima
    };

    await Alerta.findByIdAndUpdate(id, {$set: alerta}, {new: true});
    res.json({status: 'Alerta Updatte'});

};

alertaCtrl.deleteAlerta = async (req , res) => {
    await Alerta.findByIdAndRemove(req.params.id);
    res.json({status: 'Alerta Deleted'});
};
module.exports = alertaCtrl;
