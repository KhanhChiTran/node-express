const express = require("express")
const path = require("path")
const router = express.Router()

const accountController = require("../controllers")

let isLoggin = false
let username = null

router.get("/", accountController.index)

router.get(
  "/login",
  (req, res, next) => {
    accountController.error = ""
    next()
  },
  accountController.login
)

router.get("/profile", (req, res) => {
  console.log(req)
  if (!isLoggin) {
    res.redirect("login")
  }
  res.render("profile", { username })
})

router.post("/login", (req, res) => {
  if (req.body.name === "admin" && req.body.password === "123456") {
    isLoggin = true
    username = req.body.name
    res.redirect("profile")
  } else {
    res.render("login", {
      error: "Please check again your username or password",
    })
  }
})

router.get("/register", (req, res) => {
  res.render("register")
})
router.post("/register", (req, res) => {})
module.exports = router
