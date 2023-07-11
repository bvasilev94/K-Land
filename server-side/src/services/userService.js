const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (userData) => {
  try {
    const user = await User.create(userData);
    const result = createToken(user);

    return result;
  } catch (err) {
    if (err.code == 11000) {
      return err.message = 'Email or Username already taken!';
    } else {
      return err.message;
    }
  }
};
exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid username or password");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid username or password");
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
