const Venta = require("../Models/ventas");

exports.getSales = (req, res) => {
  Venta.find().then((ventaResult) => {
    res.status(200).json(ventaResult);
  });
};

exports.addSale = (req, res) => {
  console.log("Hola");
  const ventaAdd = new Venta({
    unidades: req.body.unidades,
    precioUnitario: req.body.precioUnitario,
    valorTotal: req.body.valorTotal,
    fecha: req.body.fecha,
    identificacion: req.body.identificacion,
    comprador: req.body.comprador,
    vendedor: req.body.vendedor, 
    registro: req.body.registro,
    detalles: req.body.detalles,

  });

    ventaAdd.save().then((createdSale) => {
    console.log(createdSale);
    res.status(201).json("Creado satisfactoriamente");
    });
};

exports.updateSale = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id);
    Object.assign(venta, req.body);
    res.send({ data: venta });
    venta.save();
} catch {
    res.status(404).send({ error: "No se encuentra la venta" });
    }
};

exports.deleteSale = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id);
    await venta.remove();
    res.send({ data: true });
    venta.save();
} catch {
    res.status(404).send({ error: "No se encuentra la venta" });
  }
};

exports.getSaleId = (req, res) => {
  Venta.findById(req.params.id).then((ventaResult) => {
    if (ventaResult) {
      res.status(200).json(ventaResult);
    } else {
      res.status(404).json("Venta no encontrada");
    }
    });
};
