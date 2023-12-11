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
    console.log(elementos)
    for (let i = 0; i < tamanho; i++) {
        if (ignora_zeros == true && inputs[i] == 0) {
            elementos[i].textContent = "";
        } else {
            elementos[i].textContent = inputs[i];
        }
    }
    if (tamanho == 0) {
        console.log("s")
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


    if (ganhou == "ganhou") {
        textoResultado.textContent = `PARABENS - Você ganhou!`
        textoPlacar.textContent = `${diferençaPontos}`
        resultadoCtn.style.backgroundColor = "green"
    } else if (ganhou == "perdeu") {
        textoResultado.textContent = `GAME OVER - Você perdeu!`
        textoPlacar.textContent = `${diferençaPontos}`
        resultadoCtn.style.backgroundColor = "red"
    } else if (ganhou == "empate") {
        textoResultado.textContent = "EMPATE!"
        textoPlacar.textContent = `${diferençaPontos}`
    }
}

function atualizarTela(player) {
    atualizaTabuleiro(player)
    atualizaAsides(player)
}
export { atualizarTela, mostrarResultado }
