function atualiza_tabuleiro(matriz, elemento) {
    const tabuleiro = elemento
    const rows = tabuleiro.children
    const tamanho = 3
    for (let x = 0; x < tamanho; x++) {
        let collum = rows[x].children
        for (let y = 0; y < tamanho; y++) {

            const casa = collum[y].children[0];
            if (matriz[x][y] == 0) {
                casa.innerText = ""
            } else {
                casa.innerText = matriz[x][y]
            }
            
        }
    }
}
function atualiza_dado(num, dado_div) {
    const dado = dado_div
    console.log(dado)
    dado.innerText = num
}
function atualiza_pontos(m_pontos, elementos) {
    for (let i = 0; i < elementos.length; i++) {
        const th = elementos[i];
        const ponto = m_pontos[i];
        th.innerText=ponto

    }
   
}
function atualizar_tela(player) {
    atualiza_tabuleiro(player.tabuleiro, player.tabuleiro_div)
    atualiza_dado(player.dado, player.dado_div)
    atualiza_pontos(player.pontos,player.pontos_container)
}
export {atualizar_tela}
