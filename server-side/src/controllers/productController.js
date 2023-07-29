const router = require("express").Router();

const productService = require("../services/productService.js");

router.get("/catalog", async (req, res) => {
  try {
    const qsLimit = req.query.limit
    const ownerId = req.body.ownerId;
    const products = await productService.getAll(ownerId, qsLimit);
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: "Oops something went wrong",
    });
  }
});

router.post("/catalog", async (req, res) => {
  try {
    const productData = req.body;
    await productService.create(productData);
    res.status(204).json({ message: "Product added successfuly!" });
  } catch (error) {
    res.status(400).json({
      message: "Cannot add product",
    });
  }
});

router.get("/catalog/:productId", async (req, res) => {
  try {
    const product = await productService.getOne(req.params.productId);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "Oops something went wrong",
    });
  }
});

router.put("/catalog/:productId", async (req, res) => {
  try {
    await productService.update(req.params.productId, req.body);

    res.status(204).end();
  } catch (error) {
    res.status(400).json({
      message: "Oops something went wrong",
    });
  }
});

router.delete("/catalog/:productId", async (req, res) => {
  try {
    await productService.delete(req.params.productId);

    res.status(204).end();
  } catch (error) {
    res.status(400).json({
      message: "Oops something went wrong",
    });
  }
});

module.exports = router;
