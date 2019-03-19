let s = prompt("Digite 'M' para homen e 'F' para mulher.").toUpperCase();



switch (s) {
    case 'M':
        alert("Masculino")
        break;
    case 'F':
        alert("Feminino")
        break;
    default:
        alert("Error 404!")
        break;
}
