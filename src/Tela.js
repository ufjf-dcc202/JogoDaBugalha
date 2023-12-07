function getElementos(tabuleiro, elemento) {
    const rows = tabuleiro.children
    let elementos = []
    for (let x = 0; x < 4; x++) {
        let collum = rows[x].children
        for (let i = 0; i < collum.length; i++) {
            const casa = collum[i];
            if (casa.tagName == elemento) {
                elementos.push(casa)
            }
        }
    }
    return elementos
}

function setElementos(elementos, dados, ignora_zeros) {
    const tamanho = dados.length
    for (let i = 0; i < tamanho; i++) {
        if (ignora_zeros == true && dados[i] == 0) {
            elementos[i].textContent = "";
        } else {
            elementos[i].textContent = dados[i];
        }
    }
    if (tamanho == 0) {
        console.log("s")
        elemento.textContent = dado[i];
    }
}

function atualizaTabuleiro(jogador) {
    const tabuleiroCtn = jogador.tabuleiro_div
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
    const pontoTotalCtn = [jogador.div_pontos]
    const dado = [jogador.dado]
    const dadoCtn = [jogador.dado_div]

    setElementos(dadoCtn, dado, false)
    setElementos(pontoTotalCtn, pontoTotal, false)
}

function atualizaResultado(jogador) {
    const resultadoCtn = document.querySelector('.resultados')
    const textoResultado = document.querySelector('#resultado')
    const ganhou = jogador.status

    if(ganhou == "ganhou"){
        resultadoCtn.style.display = 'flex'
        textoResultado.innerHTML = "Você ganhou!"
    }else if(ganhou == "perdeu"){
        resultadoCtn.style.display = 'flex'
        textoResultado.innerHTML = "Você perdeu!"
    }else{}
}

function atualizarTela(player) {
    atualizaTabuleiro(player)
    atualizaAsides(player)
    atualizaResultado(player)
}
export {atualizarTela}
