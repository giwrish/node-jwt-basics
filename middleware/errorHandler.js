const { APIError } = require("../errors/APIError");

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({ error: true, body: err.message });
  }
  return res.status(500).json({ error: true, body: "INTERNAL_SERVER_ERROR" });
};

module.exports = errorHandlerMiddleware;
