const router = require("express").Router();

const orderService = require("../services/orderService.js");
const {extractErrMessages} = require('../utils/errorsHandler.js')


router.post("/all-orders", async (req, res) => {
  try {
    await orderService.create(req.body);
    res.status(204).json({ message: "Product added successfuly!" });
  } catch (error) {
    const errMessages = extractErrMessages(error)
    res.status(404).json({ message: errMessages[0] });
  }
});

router.get("/all-orders/:userId", async (req, res) => {
  try {
    const orders = await orderService.getAllFromUser(req.params.userId);
    res.json(orders);
  } catch (error) {
    res.status(400).json({
      message: "Oops something went wrong",
    });
  }
});

router.delete("/all-orders/:orderId", async (req, res) => {
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
