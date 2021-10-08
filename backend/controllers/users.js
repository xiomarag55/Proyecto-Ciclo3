const Usuario = require("../models/users");

exports.getUsers = (req, res) => {
    Usuario.find().then((usuarioResult) => {
        res.status(200).json(usuarioResult);
    });
};

exports.addUser = (req, res) => {
    const UsuarioAdd = new Usuario({
        identification: req.body.identification,
        name: req.body.name,
        role: req.body.role,
        status: req.body.status,
    });

    UsuarioAdd.save().then((createdUser) => {
        console.log(createdUser);
        res.status(201).json("Creado satisfactoriamente");
    });
};
