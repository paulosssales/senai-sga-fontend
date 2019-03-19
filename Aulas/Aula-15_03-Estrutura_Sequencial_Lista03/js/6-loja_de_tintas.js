let metros_Quadrados = parseFloat(prompt("Digite quantos metros² que serão pintados:"));

let cobertura_lata = 3;

let litros = (metros_Quadrados / cobertura_lata).toFixed(3);

let qtd_lata = (litros/18).toFixed(0);
let valor_lada = qtd_lata * 80;

alert("Litros: "+litros+"\nLatas: "+qtd_lata+"\nPreço: R$ "+valor_lada.toFixed(2));