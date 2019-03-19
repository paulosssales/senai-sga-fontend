let tamaho_MB = parseFloat(
  prompt("Digite tamanho do arquivo a ser baixado:")
);

let mbps = parseFloat(
  prompt("Digite a velocidade do link:")
);

let b = mbps * 1024;
let B = 8 * b;
let kB = 1024 * B;
let MB = 1024 * kB;



alert(
  "Tamaho do Arquivo: " +
    tamaho_MB +
    " MB,\nVelocidade: " +
    mbps +
    " Mbps,\nbites: " +
    B +
    ",\nBytes: " +
    kB +
    ",\nKB: " +
    kB
);
