const express = require("express");

const app = express();

app.use("/health-check", (req, res) => {
  res.status(200).json("Health check succeeded!");
});

app.listen(5000, () => {
  console.log("Server is running in port 5000!");
});
