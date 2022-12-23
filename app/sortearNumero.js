const numeroSecreto = geraNumeroAleatorio();

function geraNumeroAleatorio (){
    return parseInt(Math.random() * 100);
};

console.log(numeroSecreto);
