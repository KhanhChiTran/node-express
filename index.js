const express = require("express")
const fs = require("fs")
const path = require("path")

const data = require("./assets/data")

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World")
})
app.get("/api/records", (req, res) => {
  res.send(data)
})

app.get("/video", (req, res) => {
  const videoPath = path.join(__dirname, "assets", "sample.mp4")
  const stat = fs.statSync(videoPath)
  const fileSize = stat.size
  console.log(req.headers.range)
  // res.send("video is playing ...")
  const head = {
    // "Content-Length": fileSize,
    "Content-Type": "video/mp4",
  }
  const streamVideo = fs.createReadStream(videoPath)
  res.writeHead(200, head)
  streamVideo.on("data", chunk => res.write(chunk))
  streamVideo.on("end", () => res.end())
  // fs.createReadStream(videoPath).pipe(res)
})

const PORT = 3000
// to serve  static files
app.use(express.static(path.join(__dirname, "assets", "images")))

app.listen(PORT, () => {
  console.log("App is running on port ", PORT)
})
