let ganhaPorHora = parseFloat(prompt("Digite quanto você ganha por hora?"));
let horasTrabalhadasNoMes = parseFloat(
  prompt("Quantas horas trabalhou no mes?")
);

let salario_bruto = horasTrabalhadasNoMes * ganhaPorHora;

let ir = (salario_bruto * 11) / 100;
let inss = (salario_bruto * 8) / 100;
let sindicato = (salario_bruto * 5) / 100;

let descontos = ir + inss + sindicato;

let salario_liquido = salario_bruto - descontos;

alert(
  "Salario Bruto: R$ " +
    salario_bruto.toFixed(2) +
    ", \nSalario: R$ " +
    salario_liquido.toFixed(2) +
    " \nDescontos: R$ " +
    descontos.toFixed(2) +
    "\nIR: R$ " +
    ir.toFixed(2) +
    ", \nINSS: R$ " +
    inss.toFixed(2) +
    ", \nSindicato: R$ " +
    sindicato.toFixed(2)+"."
);
