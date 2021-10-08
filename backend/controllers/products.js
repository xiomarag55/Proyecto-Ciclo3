const Producto = require("../models/productos");

exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.addProduct = (req, res) => {
  console.log('ola');
  const productoAdd = new Producto({
    producto: req.body.producto,
    unidades: req.body.unidades,
    precioUnitario: req.body.precioUnitario,
    valorTotal: req.body.precioUnitario,
    fecha: req.body.fecha,
    estado: req.body.estado,

  });

  productoAdd.save().then((createdProduct) => {
    console.log(createdProduct);
    res.status(201).json("Creado satisfactoriamente");
  });
};

exports.updateProduct = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    Object.assign(producto, req.body);
    res.send({ data: producto});
    producto.save();
  } catch {
      res.status(404).send({ error: "No se encuentra el producto"});

    }

  };
  exports.deleteProduct = async (req, res) => {
    try {
      const producto = await Producto.findById(req.params.id);
      await producto.remove();
      res.send({ data: true});
      producto.save();
    } catch {
        res.status(404).send({ error: "No se encuentra el producto"});
  
      } 
  }
  exports.getProductId = (req, res) => {
    Producto.findById(req.params.id).then((productoResult) => {
      if (productoResult) {
        res.status(200).json(productoResult);
      } else {
        res.status(404).json("Producto no encontrado");
      }
    });
  };