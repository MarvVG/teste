const btnLinha = document.getElementById("AdicionarLinha");
const btnSalvar = document.getElementById("btn-salvar");
const table = document.getElementById("table");
let numberoLinhas = 1;
btnLinha.addEventListener("click", () => {
  row = "<td>";
  row =
    row +
    `<input id="idItem${numberoLinhas}"  type="text" /></td> <td><input id="Produto${numberoLinhas}" type="text" /></td> <td><input id="Valor${numberoLinhas}" type="text" /></td> <td><button class="btn-excluir">Excluir</button></td>`;
  row = row + "</td>";
  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = row;
  novaLinha.id = numberoLinhas;
  table.insertAdjacentElement("beforeend", novaLinha);
  numberoLinhas++;
});
btnSalvar.addEventListener("click", () => {
  const itens = [];
  const idNota = document.getElementById("idNota");
  const Emissor = document.getElementById("Emissor");
  const Data = document.getElementById("Data");
  for (let i = 1; i < numberoLinhas; i++) {
    const idItem = document.getElementById(`idItem${i}`);
    const Produto = document.getElementById(`Produto${i}`);
    const Valor = document.getElementById(`Valor${i}`);
    console.log(idItem.value, Produto.value, Valor.value);
    itens.push([idItem.value, Produto.value, parseFloat(Valor.value)]);
  }
  console.log(idNota.value);
  const dados = {
    idNota: idNota.value,
    Emissor: Emissor.value,
    Data: Data.value,
    Itens: itens,
  };
  console.log(itens);
  console.log(dados);
});
