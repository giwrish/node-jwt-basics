// check username and password in post request
// if both exist, create new JWT else send error
// send back to front-end
// setup auth so only the request with JWC can get dashbaord

const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors");

const login = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  //const { headers }
  console.log(req);

  if (!(username && password)) {
    throw new BadRequest("Username or password is missing");
  }

  const token = jwt.sign({ id: Date.now(), username }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });
  res.status(200).json({ msg: "User created", token });
};

const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  const { id, username } = req.user;
  res.status(200).json({
    msg: `Hello ${id} : ${username}`,
    secret: `Here's your authorized data ${luckyNumber}`
  });
};

module.exports = { login, dashboard };
