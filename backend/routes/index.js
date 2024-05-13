const notaController = require("../controller/notaController");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/cadastrar", (req, res) => {
  const notacontroller = new notaController();
  notacontroller.cadastrar(req.body);
});
app.get("/", () => {});
app.listen("8080", (err) => {
  if (err) console.log(err);
  console.log("Server on");
});
