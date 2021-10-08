const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");

router.get("", UserController.getUsers);
router.post("", UserController.addUser);
router.delete("",UserController.deleteUser)

module.exports = router;