const router = require("express").Router();

const userSevrice = require("../services/userService.js");

const {extractErrMessages} = require('../utils/errorsHandler.js')

router.post("/register", async (req, res) => {
  try {
    const result = await userSevrice.register(req.body);

    res.json(result);
  } catch (error) {
    const errMessages = extractErrMessages(error)
    res.status(404).json({ message: errMessages[0] });
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await userSevrice.login(req.body);

    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/logout", (req, res) => {
  res.end();
});
module.exports = router;
