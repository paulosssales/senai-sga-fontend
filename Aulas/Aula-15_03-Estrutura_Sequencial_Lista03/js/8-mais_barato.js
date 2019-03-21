let menor = 0;
let nome = "nenhum";
let produto1 = 0;
let produto2 = 0;
let produto3 = 0;
let name1 = 'o';
let name2 = 'o';
let name3 = 'o';

do{
name1 = prompt("Digite o nome do primeiro produto");
produto1 = parseFloat(prompt("Digite valor do produto:"));

name2 = prompt("Digite o nome do segundo produto");
produto2 = parseFloat(prompt("Digite valor do produto2:"));

name3 = prompt("Digite o nome do terceiro produto");
produto3 = parseFloat(prompt("Digite valor do produto3:"));
}while(isNaN(produto1) || isNaN(produto2) || isNaN(produto3));

if (produto1 < produto2) {
  if(produto1 < produto3){
    nome = name1;
    menor = produto1;
  }
} else if (produto2 < produto1) {
  if(produto2 < produto3){
    nome = name2;
    menor = produto2;
  }
} else if (produto3 < produto1) {
  if(produto3 < produto2){
    nome = name3;
    menor = produto3;
  }
}

alert(
  "Nome produto 1: " +
    name1 +
    " - Preço produto 1 R$: " +
    produto1.toFixed(2) +
    "\nNome produto 2: " +
    name2 +
    " - Preço produto 2 R$: " +
    produto2.toFixed(2) +
    "\nNome produto 3: " +
    name3 +
    " - Preço produto 3 R$: " +
    produto3.toFixed(2) +
    "\nProduto barato" +
    "\nNome:  " +
    nome +
    " - Preço R$: " +
    menor.toFixed(2)
);
