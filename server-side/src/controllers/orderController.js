const router = require("express").Router();

const orderService = require("../services/orderService.js");

router.post("/all-orders", async (req, res) => {
  try {
    console.log(req.body);
    await orderService.create(req.body);
    res.status(204).json({ message: "Product added successfuly!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Oops something went wrong !",
    });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const orders = await orderService.getAllFromUser(req.params.userId);
    res.json(orders);
  } catch (error) {
    res.status(400).json({
      message: "Oops something went wrong",
    });
  }
});

router.delete("/:orderId", async (req, res) => {
  try {
    await orderService.deleteOrder(req.params.orderId);

    res.status(204).end();
  } catch (error) {
    res.status(400).json({
      message: "Oops something went wrong",
    });
  }
});

module.exports = router;
