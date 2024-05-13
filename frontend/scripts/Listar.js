const exportarJSON = document.getElementById("exportarJSON");
exportarJSON.addEventListener("click", () => {
  fetch("http://localhost:8080/exportarJSON");
});
