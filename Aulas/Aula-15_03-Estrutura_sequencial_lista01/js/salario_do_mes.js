let ganhaPorHora = parseFloat(prompt("Quanto você ganha por hora?"));
let horasTrabalhadas = parseFloat(prompt("Quantas horas você trabalhou no mês?"));

let salario = (horasTrabalhadas * ganhaPorHora);

alert("Salario do mês: "+salario);