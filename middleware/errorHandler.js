const APIError = require("../errors/APIError");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "INTERNAL_SERVER_ERROR" });
};

module.exports = errorHandlerMiddleware;
