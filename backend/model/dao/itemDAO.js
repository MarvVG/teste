const bd = require("./bd");
class itemDAO {
  cadastrar(Item) {
    new Promise((resolve, reject) => {
      bd.query(
        `insert into Item values(${Item.IdNota},${Item.IdItem},"${Item.Produto}",${Item.Valor})`,
        (err) => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  }
}
module.exports = itemDAO;
