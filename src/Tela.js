function getElementos(container, tag) {
    const rows = container.children
    let elementos = []
    for (let x = 0; x < 4; x++) {
        let collum = rows[x].children
        for (let i = 0; i < collum.length; i++) {
            const casa = collum[i];
            if (casa.tagName == tag) {
                elementos.push(casa)
            }
        }
    }
    return elementos
}

function setElementos(elementos, inputs, ignora_zeros) {
    const tamanho = inputs.length
    for (let i = 0; i < tamanho; i++) {
        if (ignora_zeros == true && inputs[i] == 0) {
            elementos[i].textContent = "";
        } else {
            elementos[i].textContent = inputs[i];
        }
    }
    if (tamanho == 0) {
        elementos.textContent = dado[i];
    }
}

function atualizaTabuleiro(jogador) {
    const tabuleiroCtn = jogador.tabuleiroCtn
    const matrizTabuleiro = jogador.tabuleiro
    const matrizPontos = jogador.pontos

    let casas_sanitizada = []

    for (let i = 0; i < matrizTabuleiro.length; i++) {
        for (let j = 0; j < matrizTabuleiro.length; j++) {
            const element = matrizTabuleiro[i][j];
            casas_sanitizada.push(element)
        }
    }
    const casas_ctn = getElementos(tabuleiroCtn, "TD")
    const pontos_ctn = getElementos(tabuleiroCtn, "TH")
    setElementos(pontos_ctn, matrizPontos, false)
    setElementos(casas_ctn, casas_sanitizada, true)
}

function atualizaAsides(jogador) {
    const pontoTotal = [jogador.pontoTotal]
    const pontoTotalCtn = [jogador.pontoCtn]
    const dado = [jogador.dado]
    const dadoCtn = [jogador.dadoCtn]

    setElementos(dadoCtn, dado, false)
    setElementos(pontoTotalCtn, pontoTotal, false)
}

function mostrarResultado(jogador1, jogador2) {
    const resultadoCtn = document.querySelector('.resultados')
    resultadoCtn.style.visibility = "visible"
    resultadoCtn.style.backgroundColor = "black"

    const textoResultado = document.querySelector('.resultado')
    const textoPlacar = document.querySelector('#placar')
    const ganhou = jogador1.status
    const diferençaPontos = `${jogador1.pontoTotal} - ${jogador2.pontoTotal} `
    
    var audio = new Audio('audio.mp3');
    audio.volume = 0.5;

    if (ganhou == "ganhou") {
        textoResultado.textContent = `PARABÉNS! - Você ganhou!`
        resultadoCtn.style.backgroundColor = "green"

        audio.src= './assets/vitoria.mp3'
        audio.play();
        const fundo = document.querySelector(".vitoria")
        fundo.style.visibility = "visible";

    } else if (ganhou == "perdeu") {
        textoResultado.textContent = `GAME OVER - Você perdeu!`
        resultadoCtn.style.backgroundColor = "red"

        audio.src= './assets/derrota.mp3'
        audio.play();
        const fundo = document.querySelector(".derrota")
        fundo.style.visibility = "visible";
        
    } else if (ganhou == "empate") {
        textoResultado.textContent = "EMPATE!"
    }
    textoPlacar.textContent = `${diferençaPontos}`
}

function atualizarTela(player) {
    atualizaTabuleiro(player)
    atualizaAsides(player)
}

function pisca(jogador, numeroRepetido, coluna) {
    const tabuleiroJogador = jogador.tabuleiroCtn
    const casas = getElementos(tabuleiroJogador, "TD")
    const casasPiscadas = [casas[0+coluna],casas[3+coluna],casas[6+coluna]]
    
    for (let i = 0; i < 3; i++) {
        if(casasPiscadas[i].textContent == numeroRepetido){
            casasPiscadas[i].style.backgroundColor = 'red';
            setTimeout(() => {
                casasPiscadas[i].style.backgroundColor = 'white';
            }, 300)
        }   
    }
}
function piscaPosicinar(linha, coluna,tabuleiro){

    const casas = getElementos(tabuleiro, "TD")
    const linhas = [casas[0+coluna],casas[3+coluna],casas[6+coluna]]

    linhas[linha].style.backgroundColor = 'blue';
    linhas[linha].style.color = 'white';
    setTimeout(() => {
        linhas[linha].style.backgroundColor = 'white';
        linhas[linha].style.color = 'black';
    }, 300)
    

}

export { atualizarTela, mostrarResultado, pisca,piscaPosicinar}
