let letra = "oi";
let alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

alert(alfabeto.length);

do {
  letra = prompt("Digite uma letra").toLowerCase();
} while (!isNaN(letra) || !isAlfa(letra));


function isAlfa(letra) {
  
  for (let index = 0; index < 26; index++) {
    const element = alfabeto[index];
    
    if (element == letra) {
      return true; 
    }
  }
}


switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    alert(letra + " é Vogal!");

    break;

  default:
    alert(letra + " é consoante!");

    break;
}
