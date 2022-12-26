function verificaSeOChuteTemValorValido (chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += "valor Inválido";
    } else {
        if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
            elementoChute.innerHTML += `<div>Valor Inválido. O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        } else {
            if(numero === numeroSecreto) {
                document.body.innerHTML = `
                `
            }
        }
    }
};
function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}