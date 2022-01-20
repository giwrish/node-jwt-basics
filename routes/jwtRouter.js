const router = require("express").Router();
const { throwError } = require("../controller/jwtController");

router.route("/").get(throwError);

module.exports = router;
