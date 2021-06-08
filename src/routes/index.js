const express = require("express")
const path = require("path")
const router = express.Router()

const accountController = require("../controllers")

router.get("/", accountController.index)

router.get("/login", accountController.getLogin)

router.post("/login", accountController.postLogin)

router.get("/profile", accountController.getProfile)

router.get("/register", accountController.getRegister)
router.post("/register", accountController.postRegister)
module.exports = router
