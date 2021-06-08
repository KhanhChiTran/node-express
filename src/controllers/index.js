let { isLoggin, username } = require("../modals/mockData")

const path = require("path")
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

const adapter = new FileSync(path.resolve("src", "modals", "myDB.json"))

const db = low(adapter)

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
    const x = db.get("users").find({ name: "teddy" }).value()
    console.log(x)

    // db.get("posts").push({ id: 1, title: "Hello lowDB" }).write()
    // db.set("user.name", "chitran").write()
    // console.log(db)
    // db.set("users.name", "hello i am i")
    // console.log("hello register get")
    res.render("register")
  }
  postRegister(req, res) {
    const { name, password } = req.body

    db.get("users").push({ id: 1, name, password }).write()
    res.redirect("home")
  }
}

module.exports = new AccountControler()
