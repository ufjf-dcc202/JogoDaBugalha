function get_elementos_tabuleiro(tabuleiro,elemento) {
    const rows = tabuleiro.children
    let elementos = []
    for (let x = 0; x < 4; x++) {
        let collum = rows[x].children
        for (let i = 0; i < collum.length; i++) {
            const casa = collum[i];
            if (casa.tagName==elemento) {
                elementos.push(casa)
            }
            
        }
      
       
    
    }
    return elementos
}
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
//    console.log(dado)
    dado.innerText = num
}
function atualiza_pontos(pontos, tabuleiro_ctn) {

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
    const dado = dado_div
    console.log(dado)
    dado.innerText = num
}
function atualizar_tela(player) {
    atualiza_tabuleiro(player.tabuleiro, player.tabuleiro_div)
    atualiza_dado(player.dado, player.dado_div)

}
export {atualizar_tela}
