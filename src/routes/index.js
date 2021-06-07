const express = require("express")
const path = require("path")
const router = express.Router()

const accountController = require("../controllers")

router.get("/", accountController.index)

router.get("/login", accountController.getlogin)

router.post("/login", accountController.postlogin)

router.get("/profile", accountController.getProfile)

router.get("/register", (req, res) => {
  res.render("register")
})
router.post("/register", (req, res) => {})
module.exports = router
