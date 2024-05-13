const btnLinha = document.getElementById("AdicionarLinha");
const table = document.getElementById("table");
btnLinha.addEventListener("click", () => {
  row = "<td>";
  row =
    row +
    '<input type="text" /></td> <td><input type="text" /></td> <td><input type="text" /></td> <td><button class="btn-excluir">Excluir</button></td>';
  row = row + "</td>";
  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = row;
  console.log(novaLinha.innerHTML);
  table.insertAdjacentElement("beforeend", novaLinha);
});
