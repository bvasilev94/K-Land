const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (userData) => {
  const user = await User.create(userData);
  const result = createToken(user);

  return result;
};
exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Wrong username or password");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Wrong username or password");
  }

  const result = createToken(user);

  return result;
};

function createToken(user) {
  const payload = {
    _id: user._id,
    username: user.username,
  };
  const token = jwt.sign(payload, "SECRETSECRET", { expiresIn: "2d" });

  const result = {
    _id: user._id,
    username: user.username,
    seller: user.seller,
    accessToken: token,
  };

  return result;
}
