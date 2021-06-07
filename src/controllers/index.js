class AccountControler {
  constructor(error, username) {
    this.error = error
    this.username = username
  }
  index(req, res, next) {
    res.render("home")
  }
  login(req, res, next) {
    console.log(this.error)
    res.render("login", { error: "" })
  }
}

module.exports = new AccountControler()
