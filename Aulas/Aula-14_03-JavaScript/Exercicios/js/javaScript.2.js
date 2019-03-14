let votosA = parseInt(prompt("Quantos votaram em A?"));
let votosB = parseInt(prompt("Quantos votaram em B?"));

let total = votosA + votosB;

let percentualA = (votosA/total)*100;
let percentualB = (votosB/total)*100;

alert("Votos do A: "+percentualA+"%");
alert("Votos do B: "+percentualB+"%");