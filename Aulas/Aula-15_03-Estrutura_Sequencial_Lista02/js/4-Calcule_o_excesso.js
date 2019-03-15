let kg = parseFloat(prompt("Digite quantidade de peixes em kg"));
let excesso = 0;
let multa = 0;

if (kg > 50){
    excesso = kg - 50;
    multa = excesso * 4;

    alert("Excesso de peso: "+excesso+" kg, multa: R$ "+multa.toFixed(2)+".");
    
}else if(kg >0 ){

    alert("Peso: "+kg+" e sem multa a pagar.");

}else{

    alert("Peso inválido!")

}
