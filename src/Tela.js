
function atualiza_tabuleiro(matriz){
    let tabuleiro = document.getElementById('tab_player')
    let rows = tabuleiro.children

    for (let x = 0; x < rows.length; x++) {
        let collum = rows[x].children
        for (let y = 0; y < collum.length; y++) {

            const casa = collum[y].children[0];
            casa.innerText=matriz[x][y]
        

        }
    }
}
function atualiza_dado(num){
    let dado = document.getElementById('dado_player')
    dado.innerText=num

    
}
function atualizar_tela(player){
    atualiza_tabuleiro(player.tabuleiro)
    atualiza_dado(player.dado)

}
export{atualizar_tela}
