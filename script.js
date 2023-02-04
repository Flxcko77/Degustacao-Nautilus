
const listaFocada = window.document.getElementById("cards-mesas");
const listaSalgados = window.document.getElementById("lista-salgados");
const listaSalgados1 = window.document.getElementById("container-list");
const listaSalgados2 = window.document.getElementById("div-escondida");
const mostrarMais = window.document.getElementById("Mostrar");

function expandir() {
    listaFocada.classList.add("on");
    listaSalgados.classList.add("on");
    listaSalgados1.classList.add("on");
    listaSalgados2.classList.add("on");
    mostrarMais.innerText = "Mostrar menos"
}
