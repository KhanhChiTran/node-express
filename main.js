const express = require("express")
const app = express()

const data = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
]

app.use("/ticket", (req, res, next) => {
  if ([VIPticket, ticket].includes(res.query.ticket)) {
    return next()
  }
  res.status(401).json({ message: "Access denied" })
})
app.get("/users", (req, res) => {
  res.send(data)
})

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params
  console.log(typeof userId)

  const foundUser = data.find(user => user.id === Number(userId))
  console.log(foundUser)

  res.send(foundUser)
})

app.listen(3000, () => console.log("app running"))
