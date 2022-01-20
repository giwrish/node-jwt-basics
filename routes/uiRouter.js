const router = require("express").Router();
const { login, dashboard } = require("../controller/jwtController");

router.route("/login").post(login);
router.route("/dashboard").get(dashboard);

module.exports = router;
