// LOWDB
const path = require("path")
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

const adapter = new FileSync(path.resolve("src", "modals", "myDB.json"))
// const adapter = new FileSync("db.json")

const db = low(adapter)

db.defaults({ posts: [], user: {} }).write()

// db.get("posts").push({ id: 1, title: "Hello lowDB" }).write()

// db.set("user.name", "chitran").write()
