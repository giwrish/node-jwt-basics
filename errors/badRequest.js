const APIError = require("./APIError");
const { StatusCodes } = require("http-status-codes");
class BadRequest extends APIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
