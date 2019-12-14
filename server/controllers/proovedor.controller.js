const Proovedor = require('../models/proovedor');
const proovedorCtrl = {};

proovedorCtrl.getProovedores = async (req , res) => {
    const proovedores = await Proovedor.find();
    res.json(proovedores);
};

proovedorCtrl.createProovedor = async (req, res ) => {
    const proovedor = new Proovedor(req.body);
    await proovedor.save();
    res.json('Proovedor Guardado');
};

proovedorCtrl.getProovedor = async (req , res) => {
    const proovedor = await Proovedor.findById(req.params.id);
    res.json(proovedor);
};

proovedorCtrl.editProovedor = async (req , res) => {
    const{ id } = req.params;
    const proovedor ={
        nombre: req.body.nombre,
        carnet: req.body.carnet,
        empresa: req.body.empresa
    };

    await Proovedor.findByIdAndUpdate(id, {$set: proovedor}, {new: true});
    res.json({status: 'Proovedor Update'});

};

proovedorCtrl.deleteProovedor = async (req , res) => {
    await Proovedor.findByIdAndRemove(req.params.id);
    res.json({status: 'Proovedor Deleted'});
};
module.exports = proovedorCtrl;
