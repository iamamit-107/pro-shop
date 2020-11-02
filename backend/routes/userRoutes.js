const express = require("express");
const router = express.Router();
const {
    authUser,
    getUserProfile,
    registerUser,
} = require("../controller/userController");
const { protect } = require("../middlewares/authMiddleware");
const { route } = require("./productRoutes");

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
