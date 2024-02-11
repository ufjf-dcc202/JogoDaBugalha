
export function setar_click(jogo) {
    let tabuleiro = document.querySelector('#tab_player')
    let rows = tabuleiro.children
    for (let x = 0; x < rows.length; x++) {
        let collum = rows[x].children
        for (let y = 0; y < collum.length; y++) {
            let elemento = collum[y];
            if (collum[y].tagName == 'TD') {
                elemento.addEventListener("click", (e) => {
                    jogo.pegarPosicoes(e)
                }
                );
            }
        }
    }
}