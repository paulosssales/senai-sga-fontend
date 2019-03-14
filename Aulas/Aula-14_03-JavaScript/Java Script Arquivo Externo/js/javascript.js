/*
alert("Olá mundo!");


function nomeIdade(){
    let nome = "Paulo Sales";
    let idade = "21";
    
    alert("Nome: "+nome + " Idade: "+ idade);    
}

*/

var nome2 = prompt("Digite seu nome");
var idade2 = prompt("Digite sua idade");

var escolha = confirm("Deseja ver o seu nome");

if (escolha!=0) {
    alert("Nome: "+nome2 + " Idade: "+ idade2);
} else {
    alert("Obrigado");
}  



function nI(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    
    alert("Nome: "+nome + " Idade: "+ idade);    
}

