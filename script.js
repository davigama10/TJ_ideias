class Grupo {
    constructor() {
        this.unidades = [];
        this.semanas = [];
        this.sorteio = [];
        this.unidadesSorteio = [];
        this.semanasSorteio = [];
        this.preencherGrupo();
        this.criarCopia();
    }

    preencherGrupo() {
        for (let i = 1; i <= 50; i++) {
            this.unidades.push("unidade " + i);
            this.semanas.push("semana " + i);
        }
    }

    criarCopia() {
        this.unidadesSorteio = [...this.unidades];
        this.semanasSorteio = [...this.semanas];
    }
}

let grupo1 = new Grupo;
let grupo2 = new Grupo;
let grupo3 = new Grupo;
let grupo4 = new Grupo;
let grupo5 = new Grupo;

function utilizarGrupoSelecionado() {
    let select = document.getElementById("grupos");
    let grupoSelecionado = select.value;

    let paragrafo = document.getElementById("grupo-selecionado");
    paragrafo.textContent = grupoSelecionado;
  
    switch (grupoSelecionado) {
      case "grupo1":
        exibirArrays(grupo1);
        exibirSorteio(grupo1);
        console.log("Grupo 1 selecionado");
        break;
      case "grupo2":
        exibirArrays(grupo2);
        exibirSorteio(grupo2);
        console.log("Grupo 2 selecionado");
        break;
      case "grupo3":
        exibirArrays(grupo3);
        exibirSorteio(grupo3);
        console.log("Grupo 3 selecionado");
        break;
      case "grupo4":
        exibirArrays(grupo4);
        exibirSorteio(grupo4);
        console.log("Grupo 4 selecionado");
        break;
      case "grupo5":
        exibirArrays(grupo5);
        exibirSorteio(grupo5);
        console.log("Grupo 5 selecionado");
        break;
      default:
        console.log("Nenhum grupo selecionada");
    }
}

function sortearUnidadeParaSemana(grupo) {
    let semanaIndex = Math.floor(Math.random() * grupo.semanasSorteio.length);
    let unidadeIndex = Math.floor(Math.random() * grupo.unidadesSorteio.length);
    let semana = grupo.semanasSorteio[semanaIndex];
    let unidade = grupo.unidadesSorteio[unidadeIndex];
    grupo.semanasSorteio.splice(semanaIndex, 1);
    grupo.unidadesSorteio.splice(unidadeIndex, 1);
    let sorteioItem = semana + " - " + unidade;
    grupo.sorteio.push(sorteioItem);
    exibirSorteio(grupo);
    exibirArrays(grupo);
}

function exibirArrays(grupo) {
    let arrayUnidades = document.getElementById("arrayUnidades");
    arrayUnidades.innerText = grupo.unidadesSorteio.join(", ")

    let arraySemanas = document.getElementById("arraySemanas");
    arraySemanas.innerText = grupo.semanasSorteio.join(", ")
}

function exibirSorteio(grupo) {
    let arraySorteio = document.getElementById("arraySorteio");
    arraySorteio.innerText = grupo.sorteio.join(", ")
}

function chamarSorteio() {
    let select = document.getElementById("grupos");
    let grupoSelecionado = select.value;    
  
    switch (grupoSelecionado) {
      case "grupo1":
        sortearUnidadeParaSemana(grupo1);
        break;
      case "grupo2":
        sortearUnidadeParaSemana(grupo2);
        break;
      case "grupo3":
        sortearUnidadeParaSemana(grupo3);
        break;
      case "grupo4":
        sortearUnidadeParaSemana(grupo4);
        break;
      case "grupo5":
        sortearUnidadeParaSemana(grupo5);
        break;
      default:
        console.log("Nenhum grupo selecionada");
    }
}

let sortearButton = document.getElementById("sortearButton");
sortearButton.addEventListener("click", chamarSorteio);

