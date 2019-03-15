let ganhaPorHora = parseFloat(prompt("Digite quanto você ganha por hora?"));
let horasTrabalhadasNoMes = parseFloat(prompt("Quantas horas trabalhou no mes?"))

let descontos = 0.24;

if (kg > 50){
    excesso = kg - 50;
    multa = excesso * 4;

    alert("Excesso de peso: "+excesso+" kg, multa: R$ "+multa.toFixed(2)+".");
    
}else if(kg >0 ){

    alert("Peso: "+kg+" e sem multa a pagar.");

}else{

    alert("Peso inválido!")

}
