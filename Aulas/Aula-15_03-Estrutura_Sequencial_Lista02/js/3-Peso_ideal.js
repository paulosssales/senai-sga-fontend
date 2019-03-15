let altura = parseFloat(prompt("Digite sua altura"));
let s = prompt("Digite 'M' para homen e 'W' para mulher.")

let homem = (72.2*altura) - 58;
let mulher = ((62.1*altura) - 44.7).toFixed(3);

if (s == "m" || s == "M"){
    alert("Peso ideal para o homem com "+altura+" m de altura é "+homem+" kg");

}else if(s == "w" || s == "W"){
    alert("Peso ideal para a mulher com "+altura+" m de altura é "+mulher+" kg");

}else{
    alert("Error 404! Sexo não identificado!");
}
