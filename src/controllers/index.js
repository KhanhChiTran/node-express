const { isLoggin, username } = require("../modals/mockData")

// let isLoggin = false
// let username = ""

class AccountControler {
  index(req, res, next) {
    res.render("home")
  }
  getlogin(req, res, next) {
    res.render("login", { error: "" })
  }
  postlogin(req, res, next) {
    if (req.body.name === "admin" && req.body.password === "123456") {
      isLoggin = true
      username = req.body.name
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
}

module.exports = new AccountControler()
