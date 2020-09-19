const express = require("express");

const app = express();

app.use((re, res, next) => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  if (currentHour < 17 && currentHour >= 8) {
    next()
  } else res.send("<h1>Site is open from 08.00 to 17.00</h1>");
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/ourservices.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
});

