const express = require("express")
const path = require("path")

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World")
})

const PORT = 3000
// to serve  static files
app.use(express.static(path.join(__dirname, "assets", "images")))

app.listen(PORT, () => {
  console.log("App is running in port ", PORT)
})

console.log(__dirname)
