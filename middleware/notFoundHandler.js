const notFoundMiddleware = (req, res) => {
  return res.status(404).json({ status: 404, message: "NOT_FOUND" });
};

module.exports = notFoundMiddleware;
