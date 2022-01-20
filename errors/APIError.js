class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createError = (message, statusCode) => {
  return new APIError(message, statusCode);
};

module.exports = { createError, APIError };
