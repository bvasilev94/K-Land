const router = require("express").Router();

const productService = require("../services/productService.js");

router.get("/catalog", async (req, res) => {
  try {
    const furnitures = await productService.getAll(req.query);
    res.json(furnitures);
  } catch (error) {
    res.status(400).json({
      message: "Cannot load furnitures",
    });
  }
});

router.post("/catalog", async (req, res) => {
  try {
    const productData = req.body;
    productData._ownerId = req.user._id;
    console.log(productData);
    await productService.create(productData);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({
      message: "Cannot create furniture",
    });
  }
});

router.get("/catalog/:productId", async (req, res) => {
  try {
    const furniture = await productService.getOne(req.params.productId);
    res.json(furniture);
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
