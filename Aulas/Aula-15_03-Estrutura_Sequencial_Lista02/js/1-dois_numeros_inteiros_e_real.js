let nInteiro1 = parseInt(prompt("Digite um numero inteiro"));
let nInteiro2 = parseInt(prompt("Digite outro numero inteiro"));
let nReal = parseFloat(prompt("Digite um numero real"));

let a = (nInteiro1*2)+(nInteiro2/2);
let b = (nInteiro1*3+nReal);
let c = nReal*nReal*nReal;

alert("O produto do dobro do "+nInteiro1+" com a metade do "+ nInteiro2+" é "+a);
alert("A soma do triplo do "+nInteiro1+" com "+nReal+" é "+b);
alert("O "+nReal+" elevado cubo é "+c);