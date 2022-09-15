const express = require("express")
const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/public/views/index.html`)
})

app.listen(port, () => {
  console.log(`Сервер запущен по порту: ${port}`)
})