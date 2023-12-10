import { atualizarTela, mostrarResultado } from "./Tela.js"

export function criaJogo(player1, player2) {
    return {
        player: player1,
        bot: player2,
        fimJogo:false,
        start: function () {
            this.player.jogar_dado()
            this.bot.jogar_dado()
            console.log("s")
            this.fimJogo = false
            atualizarTela(this.player)
            atualizarTela(this.bot)
        },
        deleta_coluna: function (coluna_jogada, who_delete) {

            const tabuleiro = this.player.tabuleiro
            const tabuleiro2 = this.bot.tabuleiro
            const tamanho = tabuleiro.length

            function pegarNumRepetido() {
                let repetido = 0
                for (let x = 0; x < tamanho; x++) {
                    for (let y = 0; y < tamanho; y++) {
                        const casa1 = tabuleiro[x][coluna_jogada];
                        const casa2 = tabuleiro2[y][coluna_jogada];
                        if (casa1 == casa2 && casa1 != 0 && casa2 != 0) {
                            repetido = casa1
                        }
                    }
                }
                return repetido
            }
            function apagar_repetidos(repetido) {
                for (let y = 0; y < tamanho; y++) {
                    const casa = who_delete.tabuleiro[y][coluna_jogada];

                    if (casa == repetido) {
                        who_delete.tabuleiro[y][coluna_jogada] = 0
                    }
                }
            }
            let repetido = pegarNumRepetido()
            apagar_repetidos(repetido)
        },
        checa_vitoria: function () {
            const tab_player = this.player.tabuleiro
            const tab_player2 = this.bot.tabuleiro

            function checa_tabuleiro(tabuleiro) {
                const tamanho = tabuleiro.length
                let fim_de_jogo = true
                for (let x = 0; x < tamanho; x++) {
                    for (let y = 0; y < tamanho; y++) {
                        if (tabuleiro[x][y] == 0) {
                            fim_de_jogo = false
                        }

                    }
                }
                return fim_de_jogo;
            }

            const resultadoTabuleiros = [checa_tabuleiro(tab_player), checa_tabuleiro(tab_player2)]
            const acabou = resultadoTabuleiros[0] || resultadoTabuleiros[1]
            
            if (acabou == true) {
                this.fimJogo = true

                if (player1.pontoTotal > player2.pontoTotal) {
                    player1.status = 'ganhou'
                } else if (player1.pontoTotal < player2.pontoTotal) {
                    player1.status = 'perdeu'
                } else {
                    player1.status = 'empate'
                }
                mostrarResultado(this.player,this.bot)

            }

           // console.log(this.fimJogo)

            return acabou;
        },

        ciclo_de_jogo: function (x, y) {
            console.log(this.fimJogo)
         //   this.checa_vitoria()

            if(this.fimJogo != true){
                
                this.player.posicionarDado(x, y)
                this.deleta_coluna(y, this.bot)
                this.player.jogar_dado()
                let bot_pos = this.bot.jogada()
                this.bot.jogar_dado()
                this.deleta_coluna(bot_pos[1], this.player)
                atualizarTela(this.player)
                atualizarTela(this.bot) 
                this.checa_vitoria()

            }else{

            }

            
            
        },

        pega_posições: function (e) {
            let tabuleiro = document.getElementById('tab_player')
            let rows = tabuleiro.children
            for (let x = 0; x < 3; x++) {
                let collum = rows[x].children
                for (let y = 0; y < 3; y++) {
                    let elemento = collum[y];
                    let posição = this.player.tabuleiro[x][y]
                    if (e.target == elemento && posição == "") {
                        this.ciclo_de_jogo(x, y)
                    }
                }
            }
        }
    }
}
