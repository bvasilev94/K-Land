const router = require("express").Router();

const userController = require("./controllers/userController.js");
const furnitureController = require("./controllers/productController.js");

router.use("/users", userController);
router.use("/data", furnitureController);

module.exports = router;
