require("dotenv").config({ path: "variaveis.env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("../src/routes");

const port = process.env.PORT || 3001;

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/api", routes);
server.get("/hi", (req, res) => res.send("Hello World"));
server.listen(port, () => {
  console.log(`Servidor rodando na porta: http://localhost:${port}`);
});
