const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./Routes/routes");
const db = require("./database/connection");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("client/build"));
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
