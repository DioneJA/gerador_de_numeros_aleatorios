var quantidade = document.querySelector("#range");
var imprime = document.querySelector("#numeros_gerados");
var botao_geraNumeros = document.querySelector(".botao_gerar");
imprime.value ="Campo Vazio!";

botao_geraNumeros.addEventListener("click", function () {
    if (quantidade.value > 5000) {
        imprime.value = " ⚠ Erro! A quantidade de números não pode ser maior que 5000."
        return;
    } else if (quantidade.value == 0) {
        imprime.value = " ⚠ Erro! A quantidade de números não pode ser 0."
        return;
    }

    imprime.value ="";
    for (var i = 0; i < quantidade.value; i++) {
        geraNumero(imprime);
    }

});

function geraNumero(imprime) {
    imprime.value += Math.floor(Math.random() * 10) + "";
}

function copiar(){
    let textoCopiado = document.getElementById("numeros_gerados");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function limpar() {
    imprime.value = "Campo Vazio!";
}