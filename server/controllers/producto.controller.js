const Producto = require('../models/producto');
const productoCtrl = {};

productoCtrl.getProductos = async (req , res) => {
    const productos = await Producto.find();
    res.json(productos);
};

productoCtrl.createProducto = async (req, res ) => {
    const producto = new Producto(req.body);
    await producto.save();
   res.json('Producto Guardado');
};

productoCtrl.getProducto = async (req , res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
};

 productoCtrl.editProducto = async (req , res) => {
    const{ id } = req.params;
    const producto ={
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        lugar: req.body.lugar
    };

    await Producto.findByIdAndUpdate(id, {$set: producto}, {new: true});
    res.json({status: 'Producto Updatte'});

};

productoCtrl.deleteProducto = async (req , res) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Deleted'});
};
module.exports = productoCtrl;
