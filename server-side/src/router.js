const router = require("express").Router();

const userController = require("./controllers/userController.js");
const furnitureController = require("./controllers/productController.js");
const orderController = require('./controllers/orderController.js')

router.use("/users", userController);
router.use("/data", furnitureController);
router.use("/orders", orderController)

module.exports = router;
