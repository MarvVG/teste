class Item {
  constructor(IdNota, IdItem, Produto, Valor) {
    this._IdNota = IdNota;
    this._IdItem = IdItem;
    this._Produto = Produto;
    this._Valor = Valor;
  }
  IdNota() {
    return this._IdNota;
  }
  IdItem() {
    return this._IdItem;
  }
  IdProduto() {
    return this._Produto;
  }
  IdValor() {
    return this._Valor;
  }
}
