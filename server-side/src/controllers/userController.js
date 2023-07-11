const router = require("express").Router();

const userSevrice = require("../services/userService.js");

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const result = await userSevrice.register(req.body);

    res.json(result);
    res.end();
  } catch (error) {
    console.log(error);
    console.log(res.status(400).json({ message: error.message }));
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await userSevrice.login(req.body);

    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/logout", (req, res) => {
  res.end();
});
module.exports = router;
