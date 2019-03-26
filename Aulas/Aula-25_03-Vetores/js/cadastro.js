$(document).ready(function() {
  let nome = "";
  let sexo = "none";
  let idade = 0;

  $("#salvar").click(function() {
    nome = $("#nome").val();
    sexo = $("input[type=radio][name='sexo']:checked").val();
    idade = $("#idade").val();

    //alert("nome: " + nome + "\nSexo: " + sexo + "\nIdade: " + idade);

    if (!nome.trim()) {
    
      alert("Compo nome vazio");
    
    } else {
      
      $("#tabela").append(
        "<tr><td>" +
          nome +
          "</td><td>" +
          sexo +
          "</td><td>" +
          idade +
          "</td></tr>"
      );

      $("#nome").val("");
      $("#idade").val(18);

    }
  });
});
