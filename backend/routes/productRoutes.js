const express = require("express");
const {
    getProducts,
    getProductsById,
} = require("../controller/productController");
const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);

module.exports = router;
