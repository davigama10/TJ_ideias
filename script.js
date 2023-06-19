class Grupo {
    constructor() {
        this.unidades = [];
        this.semanas = [];
        this.sorteio = [];
        this.unidadesSorteio = [];
        this.semanasSorteio = [];
    }
}

let grupo1 = new Grupo;


for (let i = 1; i <= 50; i++) {
  grupo1.unidades.push("unidade " + i);
  grupo1.semanas.push("semana " + i);
}

grupo1.unidadesSorteio = [...grupo1.unidades];
grupo1.semanasSorteio = [...grupo1.semanas];

console.log(grupo1.unidadesSorteio);
console.log(grupo1.semanasSorteio);

exibirArrays();

function sortearUnidadeParaSemana() {
    let semanaIndex = Math.floor(Math.random() * grupo1.semanasSorteio.length);
    let unidadeIndex = Math.floor(Math.random() * grupo1.unidadesSorteio.length);
    let semana = grupo1.semanasSorteio[semanaIndex];
    let unidade = grupo1.unidadesSorteio[unidadeIndex];
    grupo1.semanasSorteio.splice(semanaIndex, 1);
    grupo1.unidadesSorteio.splice(unidadeIndex, 1);
    let sorteioItem = semana + " - " + unidade;
    grupo1.sorteio.push(sorteioItem);
    exibirSorteio();
    exibirArrays();
}

function exibirArrays() {
    let arrayUnidades = document.getElementById("arrayUnidades");
    arrayUnidades.innerText = grupo1.unidadesSorteio.join(", ")

    let arraySemanas = document.getElementById("arraySemanas");
    arraySemanas.innerText = grupo1.semanasSorteio.join(", ")
}

function exibirSorteio() {
    let arraySorteio = document.getElementById("arraySorteio");
    arraySorteio.innerText = grupo1.sorteio.join(", ")
}

let sortearButton = document.getElementById("sortearButton");
sortearButton.addEventListener("click", sortearUnidadeParaSemana);

