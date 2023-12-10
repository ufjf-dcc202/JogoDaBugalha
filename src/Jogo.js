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
        deletaColuna: function (coluna_jogada, who_delete) {
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
            function apagarRepetidos(repetido) {
                for (let y = 0; y < tamanho; y++) {
                    const casa = who_delete.tabuleiro[y][coluna_jogada];

                    if (casa == repetido) {
                        who_delete.tabuleiro[y][coluna_jogada] = 0
                    }
                }
            }
            let repetido = pegarNumRepetido()
            apagarRepetidos(repetido)
        },
        checaVitoria: function () {
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


            return acabou;
        },

        ciclo_de_jogo: function (x, y) {
            if(this.fimJogo == true){return}
                
            this.player.posicionarDado(x, y)
            this.deletaColuna(y, this.bot)
            this.player.jogar_dado()
            let bot_pos = this.bot.jogada()
            this.bot.jogar_dado()
            this.deletaColuna(bot_pos[1], this.player)
            atualizarTela(this.player)
            atualizarTela(this.bot) 
            this.checaVitoria()

         

            
            
        },

        pegarPosicoes: function (e) {
            const tabuleiro = document.getElementById('tab_player')
            const rows = tabuleiro.children
            const tamanhox = rows.length

            let posx =0
            let posy = -1
            for (let x = 0; x < tamanhox; x++) {
                const collum = rows[x].children
                const tamanhoy = collum.length
                for (let y = 0; y < tamanhoy; y++) {
                    const tipo = collum[y].tagName 

                    if(tipo =="TD" && posy+1<=3){
                        posy++
                    }
                    if(tipo =="TD" && posy+1>3){
                        posy=0
                        posx++
                    }

                    const elemento = collum[y];

                  

                    if (e.target == elemento  ) {
//                        console.log(this.player.tabuleiro,[posx,posy])

                        const posição = this.player.tabuleiro[posx][posy]
                        console.log(this.player.tabuleiro,[posx,posy, posição])
                        if (posição==0) {
                            this.ciclo_de_jogo(posx, posy)
                        }
                    }
                }
            }
        }
    }
}
