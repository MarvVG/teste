const notaDAO = require("../model/dao/notaDAO");
const Nota = require("../model/entity/Nota");
class notaController {
  async cadastrar(nota) {
    const notadao = new notaDAO();
    notadao.cadastrar(new Nota(nota.idNota, nota.Emissor, nota.Data));
  }
  async exportar() {
    const notadao = new notaDAO();
    notadao.listarNotas().then((result) => {
      console.log(result); //Está retornando vazio
    });
  }
}

module.exports = notaController;
