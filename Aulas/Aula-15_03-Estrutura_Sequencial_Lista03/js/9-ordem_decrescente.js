let n1 = 'o';
let n2 = 'o';
let n3 = 'o'; 

do{
  n1 = parseFloat(prompt("Digite o 1º numero"));

  n2 = parseFloat(prompt("Digite o 2º numero"));

  n3 = parseFloat(prompt("Digite o 3º numero"));
}while(isNaN(n1) || isNaN(n2) || isNaN(n3) );

let maior = 0;
let menor = 0;
let meio = 0;

if (n1 > n2 && n1 > n3) {
  maior = n1;
} else if (n2 > n1 && n2 > n3) {
  maior = n2;
} else if (n3 > n2 && n3 > n1) {
  maior = n3;
} else {
  maior = n1;
}

if (n1 < n2 && n1 < n3) {
  menor = n1;
} else if (n2 < n1 && n2 < n3) {
  menor = n2;
} else if (n3 < n2 && n3 < n1) {
  menor = n3;
}else {
  menor = n2;
}

if (n1 > n2 && n1 < n3 || n1 > n3 && n1 < n2 || n1 == n2 || n1 == n3) {
  meio = n1;
} else if (n2 > n1 && n2 < n3 || n2 > n3 && n2 < n1 || n2 == n1 || n2 == n3) {
  meio = n2;
} else if (n3 > n2 && n3 < n1 || n3 > n2 && n3 < n1 || n3 == n2 || n3 == n1) {
  meio = n3;
}

alert(
  "n1: " +
    n1 +
    " n2: " +
    n2 +
    " n1: " +
    n3 +
    "\nO maior é " +
    maior +
    "\nO meio é " +
    meio +
    " e o menor é " +
    menor
);