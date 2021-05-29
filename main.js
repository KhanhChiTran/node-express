const fs = require("fs")
const { dirname } = require("path")

fs.writeFile(__path(dirname), "Hello world")
