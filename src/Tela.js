function pre_carregar(){
    const element = document.body;
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    for (let i = 0; i < 6; i++) {
        let a = new Image();
        a.src =     "./assets/dado"+i+".png";
    }
}
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
            elementos[i].setAttribute("dado-value", inputs[i])

        } else {
            elementos[i].textContent = inputs[i];
            elementos[i].setAttribute("dado-value", inputs[i])
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

function attTotalPontos(pontoTotalCtn, pontoTotal,jogador) {
    setElementos(pontoTotalCtn, pontoTotal, false)
    let img = document.createElement('h3');
    img.textContent = jogador.nome;
    
    pontoTotalCtn[0].appendChild(img);


}
function atualizaAsides(jogador) {
    const pontoTotal = [jogador.pontoTotal]
    const pontoTotalCtn = [jogador.pontoCtn]
    const dado = [jogador.dado]
    const dadoCtn = [jogador.dadoCtn]

    setElementos(dadoCtn, dado, false)
    dadoCtn[0].setAttribute("dado-value", dado[0])
    attTotalPontos(pontoTotalCtn, pontoTotal,jogador)
}

function mostrarResultado(jogador1, jogador2) {
    const resultadoCtn = document.querySelector('.resultados')
    
    resultadoCtn.style.visibility = "visible"
    resultadoCtn.style.fontFamily = "VT323"
    resultadoCtn.style.backgroundColor = "black"
    resultadoCtn.style.color= "white"
    
    const textoResultado = document.querySelector('.resultado')
    const textoPlacar = document.querySelector('#placar')
    const ganhou = jogador1.status
    const diferençaPontos = `${jogador1.pontoTotal} - ${jogador2.pontoTotal} `
    
    var audio = new Audio('audio.mp3');
    audio.volume = 0.5;

    if (ganhou == "ganhou") {
        textoResultado.textContent = `PARABÉNS! - Você ganhou!`

        
    } else if (ganhou == "perdeu") {
        textoResultado.textContent = `GAME OVER - Você perdeu!`

        
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
            casasPiscadas[i].style.backgroundColor = '#FFCCCB';
            setTimeout(() => {
                casasPiscadas[i].style.backgroundColor = 'white';
            }, 800)
        }   
    }
}
function piscaPosicinar(linha, coluna,tabuleiro){
    const casas = getElementos(tabuleiro, "TD")
    const linhas = [casas[0+coluna],casas[3+coluna],casas[6+coluna]]

    linhas[linha].style.backgroundColor = '#ADD8E6';
    setTimeout(() => {
        linhas[linha].style.backgroundColor = 'white';
    }, 800)
    

}

export { atualizarTela,pre_carregar, mostrarResultado, pisca,piscaPosicinar}
