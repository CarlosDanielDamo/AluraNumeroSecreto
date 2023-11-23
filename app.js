//Area das Variaveis
let listaNumerosSorteados = []; //Variavel que cria uma lista para armazenar os numero secretos ja utilizados
let numeroMaximo = 100; //Variavel que recebe o numero limite que se pode chegar o numero secreto
let numeroSecreto = gerarNumeroAleatorio(); //variavel que recebe a funcão que gera o numero secreto
let tentativas = 1; //variavel que armazena o numero de tentativas que o usuario precisou pra acertar o numeor secreto
console.log(numeroSecreto);

mensagemInicial();

//Aréa de funções

function mensagemInicial() {
    exibirTextoTela('h1', 'Adivinhe o Número Secreto!');
    exibirTextoTela('p', `Selecione um numero de 1 a ${numeroMaximo}:`);
}
 function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoTela('h1','Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabens! Você descobriu que o numero secreto era ${numeroSecreto} com ${tentativas} ${palavraTentativas}:D!`;
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled', false);
    }else{
        if(chute > numeroSecreto) {
            exibirTextoTela('h1', 'Errou!!!');
            exibirTextoTela('p', `O numero secreto e menor que ${chute}!`);
         }else {
            exibirTextoTela('h1', 'Errou!!!');
            exibirTextoTela('p', `O numero secreto e maior que ${chute}!`);
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
}

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroMaximo+1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista == numeroMaximo) {
        listaNumerosSorteados = [];
    }
    //verifica se o numero sorteado ja esta na lista com o metodo INCLUDE
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


