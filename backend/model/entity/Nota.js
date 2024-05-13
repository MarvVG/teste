// Entidade Nota que representa tabela NotaFiscal no Banco de dados
class Nota {
  constructor(idNota, Emissor, Data) {
    this._idnota = idNota;
    this._Emissor = Emissor;
    this._Data = Data;
  }
  get idNota() {
    return this._idnota;
  }
  get Emissor() {
    return this._Emissor;
  }
  get Data() {
    return this._Data;
  }
}
module.exports = Nota;
