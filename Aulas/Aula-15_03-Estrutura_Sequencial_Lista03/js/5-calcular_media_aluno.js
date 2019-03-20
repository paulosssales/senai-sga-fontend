let n1 = parseFloat(prompt("Digite a primeira nota"));
let n2 = parseFloat(prompt("Digite a segunda nota"));

let media = (n1 + n2) /2;

if (media == 10) {
  alert("Aprovado com distinção");
} else if(media >= 7){
  alert("Aprovado")
}else{
  alert("Reprovado");
}