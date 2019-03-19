let letra = "oi";
let alfabeto = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];

do {
  letra = prompt("Digite uma letra").toLowerCase();
} while (!isNaN(letra));


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
