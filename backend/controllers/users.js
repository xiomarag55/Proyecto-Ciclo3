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

exports.deleteUser=(req,res)=>{
    Usuario.findByIdAndRemove(req.params.usuarioId).then(Usuario => {
        if(!Usuario) {    
            return res.status(404).send({
                message: "No se pudo encontrar usuario con ID " + req.params.usuarioId
            
            });  
        }
        res.send({message: "Usuario eliminado con éxito"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "No se pudo encontrar usuario con ID " + req.params.usuarioId
            });  
    }
    return res.status(500).send({
        message: "No se pudo eliminar el usuario con ID " + req.params.userId

    });

    });
};
