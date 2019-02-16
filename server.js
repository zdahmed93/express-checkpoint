const express = require("express");

const app = express();

app.get("/", (req, res) => {
  //res.send("hi")
  const currentDate = new Date();
  console.log(currentDate);
  const currentHour = currentDate.getHours();
  console.log(currentHour);

  if (currentHour < 17 && currentHour >= 8) {
    res.sendFile(__dirname + "/home.html");
  } else res.send("<h1>Site is open from 08.00 to 17.00</h1>");
});

app.get("/services", (req, res) => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  if (currentHour < 17 && currentHour >= 8) {
    res.sendFile(__dirname + "/ourservices.html");
  } else res.send("<h1>Site is open from 08.00 to 17.00</h1>");
});

app.get("/contact", (req, res) => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  if (currentHour < 17 && currentHour >= 8) {
    res.sendFile(__dirname + "/contact.html");
  } else res.send("<h1>Site is open from 08.00 to 17.00</h1>");

  res.sendFile(__dirname + "/contact.html");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
});

