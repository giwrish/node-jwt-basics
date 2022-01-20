const APIError = require("./APIError");
const { StatusCodes } = require("http-status-codes");
class Unauthorized extends APIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = Unauthorized;
