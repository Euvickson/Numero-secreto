function verificaSeOChuteTemValorValido (chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        console.log("valor Inválido");
    } else {
        if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
            console.log(`Valor Inválido. O número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
        }
    }
};
function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}