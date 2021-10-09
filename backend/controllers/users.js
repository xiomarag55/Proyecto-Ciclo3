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

    // UsuarioAdd.save(function (error) {
    //     assert.equal(error.errors['name'].message,
    //         'Path `name` is required.');

    //     error = UsuarioAdd.validateSync();
    //     assert.equal(error.errors['name'].message,
    //         'Path `name` is required.');
    // });
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
    Usuario.findByIdAndRemove(req.params.id).then(Usuario => {
        if (!Usuario) {
            return res.status(404).send({
                message: "No se pudo encontrar usuario con ID " + req.params.id

            });
        }
        res.send({ message: "Usuario eliminado con éxito" });
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "No se pudo encontrar usuario con ID " + req.params.id
            });
        }
        return res.status(500).send({
            message: "No se pudo eliminar el usuario con ID " + req.params.id

        });

    });
};
