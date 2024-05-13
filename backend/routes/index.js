const notaController = require("../controller/notaController");
const itemController = require("../controller/itemController");
const express = require("express");
const fs = require("fs");
const path = require("path");
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
  const notas = notacontroller.exportar(); // Receberia as Notas com os itens em JSON
  fs.writeFile(
    path.join(__dirname, "../../", "notas.json"),
    "conteudo que seria recebido",
    (err) => {
      console.log(err);
    }
  );
});
app.listen("8080", (err) => {
  if (err) console.log(err);
  console.log("Server on");
});
