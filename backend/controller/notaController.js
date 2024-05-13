const notaDAO = require("../model/dao/notaDAO");
const Nota = require("../model/entity/Nota");
class notaController {
  async cadastrar(nota) {
    const notadao = new notaDAO();
    notadao.cadastrar(new Nota(nota.idNota, nota.Emissor, nota.Data));
  }
  async exportar() {
    const notadao = new notaDAO();
    const resposta = await notadao.listarNotas();
    console.log(resposta);
  }
}

module.exports = notaController;
