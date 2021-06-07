const express = require("express")
const path = require("path")
const router = express.Router()

let isLoggin = false
let username = null

router.get("/", (req, res) => {
  res.render("home")
})

router.get("/login", (req, res) => {
  res.render("login", { error: "" })
})

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
