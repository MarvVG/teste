const notaController = require("../controller/notaController");
const itemController = require("../controller/itemController");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/cadastrar", (req, res) => {
  const notacontroller = new notaController();
  const itemcontroller = new itemController();
  notacontroller.cadastrar(req.body).then(() => {
    itemcontroller.cadastrar(req.body.idNota, req.body.Itens);
  });
});
app.get("/exportarJSON", () => {
  const notacontroller = new notaController();
  notacontroller.exportar();
});
app.listen("8080", (err) => {
  if (err) console.log(err);
  console.log("Server on");
});
