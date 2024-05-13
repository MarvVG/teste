const itemDAO = require("../model/dao/itemDAO");
const Item = require("../model/entity/Item");
class itemController {
  cadastrar(idNota, Itens) {
    const itemdao = new itemDAO();
    Itens.forEach((item) => {
      itemdao.cadastrar(new Item(idNota, item[0], item[1], item[2]));
    });
  }
}
module.exports = itemController;
