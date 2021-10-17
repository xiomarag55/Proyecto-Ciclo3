const Usuario = require("../models/users");

exports.existUsuario = (req, res) => {
  Usuario.find()
    .where("googleId")
    .equals(req.body.googleId)
    .then((usuarioResult) => {
      res.status(200).json({ status: 0, response: usuarioResult });
    })
    .catch((err) => {
      res.status(200).json({ status: 1, error: "Not found User" });
    });
};

exports.addUser = (req, res) => {
  const UsuarioAdd = new Usuario({
    email: req.body.email,
    name: req.body.name,
    role: req.body.role,
    status: req.body.status,
    googleId: req.body.googleId,
  });

  UsuarioAdd.save()
    .then((createdUser) => {
      res
        .status(201)
        .json({ status: 1, response: "Creado satisfactoriamente" });
    })
    .catch((err) => {
      res.status(200).json({ status: 1, error: err });
    });
};

exports.getUsers = (req, res) => {
  Usuario.find().then((usuarioResult) => {
    res.status(200).json(usuarioResult);
  });
};

exports.getVendorUsers = (req, res) => {
  Usuario.find()
    .where("role")
    .equals("vendedor")
    .then((usuarioResult) => {
      res.status(200).json(usuarioResult);
    });
};

exports.updateUser = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    Object.assign(usuario, req.body);
    res.send({ data: usuario });
    usuario.save();
  } catch {
    res.status(404).send({ error: "No se encuentra el usuario" });
  }
};
exports.deleteUser = (req, res) => {
  Usuario.findByIdAndRemove(req.params.id)
    .then((Usuario) => {
      if (!Usuario) {
        return res.status(404).send({
          message: "No se pudo encontrar usuario con ID " + req.params.id,
        });
      }
      res.send({ message: "Usuario eliminado con éxito" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "No se pudo encontrar usuario con ID " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "No se pudo eliminar el usuario con ID " + req.params.id,
      });
    });
};
