const { json } = require("express");
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
  async listarNotas() {
    new Promise((resolve, reject) => {
      bd.query(`select * from notaFiscal;`, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });
  }
}
module.exports = notaDAO;
