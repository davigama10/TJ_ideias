let unidades = [];
let semanas = [];
let sorteio = [];

for (let i = 1; i <= 50; i++) {
  unidades.push("unidade " + i);
  semanas.push("semana " + i);
}

let unidadesSorteio = [...unidades];
let semanasSorteio = [...semanas];

exibirArrays();

function sortearUnidadeParaSemana() {
    let semanaIndex = Math.floor(Math.random() * semanasSorteio.length);
    let unidadeIndex = Math.floor(Math.random() * unidadesSorteio.length);
    let semana = semanasSorteio[semanaIndex];
    let unidade = unidadesSorteio[unidadeIndex];
    semanasSorteio.splice(semanaIndex, 1);
    unidadesSorteio.splice(unidadeIndex, 1);
    let sorteioItem = semana + " - " + unidade;
    sorteio.push(sorteioItem);
    exibirSorteio();
    exibirArrays();
}

function exibirArrays() {
    let arrayUnidades = document.getElementById("arrayUnidades");
    arrayUnidades.innerText = unidadesSorteio.join(", ")

    let arraySemanas = document.getElementById("arraySemanas");
    arraySemanas.innerText = semanasSorteio.join(", ")
}

function exibirSorteio() {
    let arraySorteio = document.getElementById("arraySorteio");
    arraySorteio.innerText = sorteio.join(", ")
}

let sortearButton = document.getElementById("sortearButton");
sortearButton.addEventListener("click", sortearUnidadeParaSemana);

