const notaDAO = require("../model/dao/notaDAO");
const Nota = require("../model/entity/Nota");
class notaController {
  async cadastrar(nota) {
    const notadao = new notaDAO();
    res = await notadao.cadastrar(
      new Nota(nota.idNota, nota.Emissor, nota.Data)
    );
  }
}
module.exports = notaController;
