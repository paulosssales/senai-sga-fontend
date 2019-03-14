let n1 = parseFloat(prompt("Digite a nota do 1 bimestre"));
let n2 = parseFloat(prompt("Digite a nota do 2 bimestre"));
let n3 = parseFloat(prompt("Digite a nota do 3 bimestre"));
let n4 = parseFloat(prompt("Digite a nota do 4 bimestre"));

let media = (n1+n2+n3+n4)/4;

let nome = prompt("Digite seu nome");
let idade = parseInt(prompt("Digite sua idade"));

alert("Aluno: "+nome+", Idade: "+idade);

if (media <= 3) {
    alert("Reprovado, média: "+media);
} else if(media <= 6.9){
    alert("Recuperação, média: "+media);
}else{
    alert("Aprovado, média: "+media)
}