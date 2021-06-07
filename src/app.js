const express = require("express")
const path = require("path")
const app = express()
const port = 3000
const ejs = require("ejs")
const router = require("./routes")

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(port, console.log("Server running..."))
