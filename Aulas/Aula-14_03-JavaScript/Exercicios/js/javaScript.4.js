let cigarrospordia = parseInt(prompt("Quantos cigarros você fuma por dia?"));
let custodocigarro = parseFloat(prompt("Quantos custa um cigarro?"));
let anosfumandocigarro = parseInt(prompt("Há quantos anos você fuma cigarro?"));

let anoscusto = parseFloat((cigarrospordia*365)/custodocigarro);

alert("prejuizo por ano: RS "+anoscusto.toFixed(2));