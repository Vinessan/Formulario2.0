//VERIFICA SE TODOS OS CAMPOS DO FORMULARIO FORAM PREENCHIDO CORRETAMENTE
function confirmaDados() {
    //NOME DO FUNCIONARIO
    if (document.dados.nome_Funcionario.value == "" ||
        document.dados.nome_Funcionario.value.length < 8) {
        alert("Preencha campo NOME DO FUNCIONARIO corretamente!");
        document.dados.nome_Funcionario.focus();
        return false;
    }


    //CONFIRMA CPF
    if (document.dados.cpf.value == "" ||
        document.dados.cpf.value.length < 14) {
        alert("Preencha campo CPF corretamente!");
        document.dados.cpf.focus();
        return false;
    }
    //CONFIRMA RG
    if (document.dados.rg.value == "" ||
        document.dados.rg.value.length < 9) {
        alert("Preencha campo RG corretamente!");
        document.dados.rg.focus();
        return false;
    }
    //DATA DE NASCIMENTO
    if (document.dados.data_nascimento.value == "" ||
        document.dados.data_nascimento.value.length < 10) {
        alert("Preencha campo DATA DE NASCIMENTO corretamente!");
        document.dados.data_nascimento.focus();
        return false;
    }
    //TIPO DE CNH
    if (document.dados.cnh.value == "") {
        alert("Preencha campo TIPO DE CNH corretamente");
        document.dados.cnh.focus();
        return false;
    }
    //ESTADO CIVIL
    if (document.dados.estado_Civil.value == "") {
        alert("Preencha campo ESTADO CIVIL corretamente");
        document.dados.estado_Civil.focus();
        return false;
    }
    //CEP
    if (document.dados.cep.value == "" ||
        document.dados.cep.value.length < 9) {
        alert("Preencha campo CEP corretamente");
        document.dados.cep.focus();
        return false;
    }
    //RUA
    if (document.dados.rua.value == "") {
        alert("Preencha campo RUA corretamente");
        document.dados.rua.focus();
        return false;
    }
    //BAIRRO
    if (document.dados.Bairro.value == "") {
        alert("Preencha campo BAIRRO corretamente");
        document.dados.Bairro.focus();
        return false;
    }
    //CIDADE
    if (document.dados.Cidade.value == "") {
        alert("Preencha campo CIDADE corretamente");
        document.dados.Cidade.focus();
        return false;
    }
    //ESTADO
    if (document.dados.Estado.value == "") {
        alert("Preencha campo ESTADO corretamente");
        document.dados.Estado.focus();
        return false;
    }
    //NÚMERO DE TELEFONE
    if (document.dados.Numero.value == "" ||
        document.dados.Numero.value.length < 15) {
        alert("Preencha campo NÚMERO DE TELEFONE corretamente");
        document.dados.Numero.focus();
        return false;
    }
    //NUMERO RESIDENCIAL
    if (document.dados.NumCasa.value == "" ||
        document.dados.NumCasa.value.length > 4) {
        alert("Preencha campo NÚMERO RESIDENCIAL corretamente");
        document.dados.NumCasa.focus();
        return false;
    }
    //COMPLEMENTO
    if (document.dados.Complemento.value == "") {
        alert("Preencha campo COMPLEMENTO corretamente");
        document.dados.Complemento.focus();
        return false;
    }

    //BOTAO TESTE
    if (document.dados.botao_enviaDados.value == "") {
        alert("Cadastro Realizado com Sucesso!");

        console.log(fields);

        const jsonFields = JSON.stringify(fields)

        console.log(jsonFields)

        const req = new XMLHttpRequest();
        req.open("POST", "https://beginner-api.herokuapp.com/save", true)
        req.setRequestHeader("Content-Type", "application/json")
        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                req.send();
            }
        }
    }
}













//CPF
function mascara_cpf() {
    var cpf = document.getElementById('cpf')
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    }
    else if (cpf.value.length == 11) {
        cpf.value += "-"
    }

}


//RG
function mascara_rg() {
    var rg = document.getElementById('rg')
    if (rg.value.length == 1) {
        rg.value += "-"
    }
    else if (rg.value.length == 5) {
        rg.value += "."
    }

}


//DATA DE NASCIMENTO
function mascara_data_nascimento() {
    var data_nascimento = document.getElementById('data_nascimento')
    if (data_nascimento.value.length == 2 || data_nascimento.value.length == 5) {
        data_nascimento.value += "/"
    }


}


//CEP
function mascara_cep() {
    var cep = document.getElementById('cep')
    if (cep.value.length == 5) {
        cep.value += "-"
    }

}


//NÚMERO DE TELEFONE
function mascara_telefone() {
    var Numero = document.getElementById('Numero')
    if (Numero.value.length == 0) {
        Numero.value += "("
    } else if (Numero.value.length == 3) {
        Numero.value += ")"
    } else if (Numero.value.length == 5) {
        Numero.value += "."
    } else if (Numero.value.length == 10) [
        Numero.value += "-"
    ]


}









function getDadosPorCep(cep) {
    let xhr = new XMLHttpRequest
    let url = 'https://viacep.com.br/ws/' + cep + '/json/unicode/'
    xhr.open('GET', url, true)

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let dadosJSONText = xhr.responseText
                let dadosJSONObj = JSON.parse(dadosJSONText)

                document.getElementById('rua').value = dadosJSONObj.logradouro
                document.getElementById('Bairro').value = dadosJSONObj.bairro
                document.getElementById('Cidade').value = dadosJSONObj.localidade
                document.getElementById('Estado').value = dadosJSONObj.uf
            }
        }
    }
    xhr.send()
}




