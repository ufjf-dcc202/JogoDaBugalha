import{Jogador} from './Jogador.js'
        
let player = Jogador()

        function clicar_tabuleiro(e){
            let tabuleiro = document.getElementById('tab_player')
            let rows = tabuleiro.children
            for (let x = 0; x < rows.length; x++) {
                let collum = rows[x].children
                for (let y = 0; y < collum.length; y++) {
                    let elemento = collum[y];
                    let posição = player.tabuleiro[x][y]

                    if(e.target==elemento && posição==""){
                        player.posicionar_dado(x,y)
                        player.jogar_dado()
                    }
                }
            }
        }

        function setar_click(){
            let tabuleiro = document.getElementById('tab_player')
            let rows = tabuleiro.children
            for (let x = 0; x < rows.length; x++) {
                let collum = rows[x].children
                for (let y = 0; y < collum.length; y++) {
                    let elemento = collum[y];
                    elemento.addEventListener("click", clicar_tabuleiro);
                }
            }
        }
        setar_click()
        player.jogar_dado()