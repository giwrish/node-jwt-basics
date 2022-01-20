const router = require("express").Router();
const { login, dashboard } = require("../controller/jwtController");
const authMiddleware = require("../middleware/auth");
router.route("/login").post(login);
router.route("/dashboard").get(authMiddleware, dashboard);

module.exports = router;
