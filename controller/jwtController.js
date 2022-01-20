const { createError } = require("../errors/APIError");

// check username and password in post request
// if both exist, create new JWT else send error
// send back to front-end

// setup auth so only the request with JWC can get dashbaord

const login = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (!(username && password)) {
    throw createError("Username or password is missing", 400);
  }

  res.status(200).json({ message: "Login Screen" });
};

const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random()) * 100;
  res.status(200).json({
    message: `Hello Jon Snow`,
    secret: `Here's your authorized data ${luckyNumber}`
  });
};

module.exports = { login, dashboard };
