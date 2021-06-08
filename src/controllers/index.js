let { isLoggin, username } = require("../modals/mockData")

// let isLoggin = false
// let username = ""

class AccountControler {
  index(req, res, next) {
    res.render("home")
  }
  getLogin(req, res, next) {
    // res.status(200).json({ name: "hello" })
    res.render("login", { error: "" })
  }
  postLogin(req, res, next) {
    console.log(req.body)
    if (req.body.name === "admin" && req.body.password === "123456") {
      isLoggin = true
      username = req.body.username
      res.redirect("profile")
    } else {
      res.render("login", {
        error: "Please check again your username or password",
      })
    }
  }
  getProfile(req, res, next) {
    if (!isLoggin) {
      res.redirect("login")
    }
    res.render("profile", { username })
  }
  getRegister(req, res) {
    res.render("register")
  }
  postRegister(req, res) {
    res.send("hehe")
  }
}

module.exports = new AccountControler()
