// Entidade Item que representa tabela Item no Banco de dados
class Item {
  constructor(IdNota, IdItem, Produto, Valor) {
    this._IdNota = IdNota;
    this._IdItem = IdItem;
    this._Produto = Produto;
    this._Valor = Valor;
  }
  get IdNota() {
    return this._IdNota;
  }
  get IdItem() {
    return this._IdItem;
  }
  get Produto() {
    return this._Produto;
  }
  get Valor() {
    return this._Valor;
  }
}
module.exports = Item;
