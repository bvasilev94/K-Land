const router = require("express").Router();

const orderService = require("../services/orderService.js");

router.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    await orderService.create(req.body);
    res.status(204).json({ message: "Product added successfuly!" });
  } catch (error) {
    res.status(400).json({
      message: "Oops something went wrong !",
    });
  }
});

module.exports = router;
