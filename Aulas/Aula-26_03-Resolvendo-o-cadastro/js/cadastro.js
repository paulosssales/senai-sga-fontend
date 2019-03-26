function qtd_linhas() {
    let funcionarios = document.getElementById("tabela");
    let qtd = funcionarios.getElementsByTagName("tr").length;
    return qtd;
}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = 18;
}

function inserir() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let sexo = "erro 401";

    if (document.getElementById("masculino").checked) {
        sexo = "Masculino";
    } else {
        sexo = "Femnino";
    }

    adicionar(nome,sexo,idade);
    limpar();
}

function adicionar(nome, sexo, idade) {
    let tabela = document.getElementById("tabela");
    let linha = tabela.inserRow(qtd_linhas());

    let td_nome = linha.insertCell(0);
    let td_sexo = linha.insertCell(1);
    let td_idade = linha.insertCell(2);

    td_nome.innerHTML = nome;
    td_sexo.innerHTML = sexo;
    td_idade.innerHTML = idade;
}