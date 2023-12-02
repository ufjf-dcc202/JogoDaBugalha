
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
function set_elementos_tabuleiro(elementos,dados, ignora_zeros) {
    console.log(elementos, dados)

    for (let i = 0; i < elementos.length; i++) {
        if( ignora_zeros ==true && dados[i]==0 ){
            elementos[i].innerText = "";
        }else{
            elementos[i].innerText = dados[i];
        }
    }
}

function atualiza_tabuleiro(elemento, casas,pontos) {
    const tabuleiro = elemento

    let casas_sanitizada = []
    for (let i = 0; i < casas.length; i++) {
        for (let j = 0; j < casas.length; j++) {
            const element = casas[i][j];
            casas_sanitizada.push(element)
        }
        
    }

    const casas_ctn = get_elementos_tabuleiro(tabuleiro,"TD")
    const pontos_ctn = get_elementos_tabuleiro(tabuleiro,"TH")
    set_elementos_tabuleiro(pontos_ctn, pontos,false)
    set_elementos_tabuleiro(casas_ctn, casas_sanitizada,true)

}
function atualiza_dado(num, dado_div) {
    const dado = dado_div
    dado.innerText = num
}

function atualizar_tela(player) {
    atualiza_tabuleiro(player.tabuleiro_div, player.tabuleiro,player.pontos )
    atualiza_dado(player.dado, player.dado_div)

}
export {atualizar_tela}
