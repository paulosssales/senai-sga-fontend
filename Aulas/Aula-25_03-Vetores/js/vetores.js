/*
// Vetor iniciado com valores
let go = ["jeep","corsa"];

// Vetor instanciado com Array()
let gogo = new Array("jeep","corsa");

// Vetor vazio
let gogogo = [];

// Vetor com vetores dentro
let pessoa ={nome:"jose", idade:38};

pessoa["nome"];

pessoa["idade"];

// Vetor com vetores dentro
let cars = [
    ["Corsa", "Classic", "Prisma"],
    ["Palio", "Uno", "Toro"],
    ["Clio", "Duster", "Logan"]
]

// Retornando todos os valores do vetor
alert(cars);

// Retornando apenas os valores da linha 1 do vetor
alert(cars[1]);

// Retornando apenas o valor da linha 1 e coluna 2
alert(cars[1][2]);

*/
let cars = {
    gm: ["Corsa", "Classic", "Prisma"],
    fiat: ["Palio", "Uno", "Toro"],
    Renault: ["Clio", "Duster", "Logan"]
}

// Retornando os valores do vetor relacionados a 'gm' 
alert(cars=["gm"])

// Retornando o valor do vetor relacionado a 'gm' e na posição 1
alert(cars=["gm"])

let p1 = document.getElementById("p1").innerHTML;

alert(p1);

// Retornando os valores das tags 'p' para paragrafos
let paragrafos = document.getElementsByTagName("p");

// retornando o valor do paragrafo na posição 0 e modificando para Hello
//paragrafos[0].innerHTML = "Hello";

alert(paragrafos[0].innerHTML)
