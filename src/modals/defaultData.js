// LOWDB
const { db } = require("./lowdbConfig")

// LOWDB

db.defaults({ posts: [], users: {} }).write()

db.get("posts").push({ id: 1, title: "Hello lowDB" }).write()

db.set("user.name", "chitran").write()
