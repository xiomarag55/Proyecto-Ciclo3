const express = require("express");
const router = express.Router();

const SaleController = require("../controllers/sales");

router.get("", SaleController.getSales);
router.post("", SaleController.addSale);
router.patch("/:id", SaleController.updateSale);
router.delete("/:id", SaleController.deleteSale);
router.get("/:id", SaleController.getSaleId);

module.exports = router;