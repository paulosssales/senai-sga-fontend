let n1 = parseFloat(prompt("Digite o 1º numero"));

let n2 = parseFloat(prompt("Digite o 2º numero"));

let n3 = parseFloat(prompt("Digite o 3º numero"));

let maior = 0;

if (n1 > n2 && n1 > n3) {
  maior = n1;
} else if (n2 > n1 && n2 > n3) {
  maior = n2;
} else if (n3 > n2 && n3 > n1) {
  maior = n3;
}

alert(
  "n1: " +
    n1 +
    " n2: " +
    n2 +
    " n1: " +
    n3 +
    "\nO maior é " +
    maior
);
