const express = require("express");

const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Successully running server",
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
