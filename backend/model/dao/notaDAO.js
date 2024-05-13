const bd = require("./bd");
class notaDAO {
  async cadastrar(Nota) {
    new Promise((resolve, reject) => {
      bd.query(
        `insert into notaFiscal values(${Nota.idNota},"${Nota.Emissor}","${Nota.Data}")`,
        (err) => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  }
}
module.exports = notaDAO;
