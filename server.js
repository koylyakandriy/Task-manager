const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () =>
  console.log(
    `Server started on port: ${port} and starting at http://localhost:${port}`,
  ),
);
