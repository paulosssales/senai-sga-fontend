let metros_Quadrados = parseFloat(
  prompt("Digite quantos m² que serão pintados:")
);

let qtd_galoes2 = 0;
let qtd_lata2 = 0;

let cobertura_lata = 6;

let litros = (metros_Quadrados / cobertura_lata + 0.5).toFixed(0);

let qtd_lata = (litros / 18 + 0.5).toFixed(0);
let qtd_galoes = (litros / 3.6 + 0.5).toFixed(0);
let valor_lada = qtd_lata * 80;
let valor_galoes = qtd_galoes * 25;

let litros2 = parseFloat(litros);
alert("antes do 'do'" + litros2);
do {
  if (litros2 > 18) {
    qtd_lata2++;
    litros2 = litros2 - 18;
  } else if (litros2 >= 3.6) {
    qtd_galoes2++;
    litros2 = litros2 - 3.6;
  } else {
    qtd_galoes2++;
    litros2 = 0;
  }
} while (litros2 > 0);

let valor_galoes2 = qtd_galoes2 * 25;
let valor_lada2 = qtd_lata2 * 80;
let preco_eco = valor_galoes2 + valor_lada2;
let litros_eco = (qtd_galoes2 * 3.6) + (qtd_lata2 *18)

alert(
  "Metro: " +
    metros_Quadrados +
    " m²,\nLitros: " +
    litros +
    " l,\nLatas: " +
    qtd_lata +
    ",\nPreço: R$ " +
    valor_lada.toFixed(2) +
    "\nOu" +
    ",\nGalões: " +
    qtd_galoes +
    ",\nPreço: R$ " +
    valor_galoes.toFixed(2) +
    ",\n-- Venda econômica -- " +
    "\nLatas " +
    qtd_lata2 +
    ",\nGalões " +
    qtd_galoes2 +
    ",\nPreço: R$ " +
    preco_eco.toFixed(2) +
    "\nLitros: "+
    litros_eco
);
