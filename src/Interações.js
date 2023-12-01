import {Jogador} from './Jogador.js'

let divTabuleiroPlayer = document.getElementById('tab_player')
let divDadoPlayer = document.getElementById('dado_player')
let player = Jogador(divTabuleiroPlayer, divDadoPlayer)

let divTabuleiroBot = document.getElementById('tab_bot')
let divDadoBot = document.getElementById('dado_bot')
let bot = Jogador(divTabuleiroBot, divDadoBot)
function Jogo(player1, player2) {
    return {
        player: player1,
        bot: player2,
        calcular_pontos: function(jogador) {
            let somaColuna = [0, 0, 0]
            let pontosColunas = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
            let tabuleiro = jogador.tabuleiro
            for (let linha = 0; linha < 3; linha++) {
                for (let coluna = 0; coluna < 3; coluna++) {
                    pontosColunas[linha][coluna] = tabuleiro[coluna][linha]
                }
            }

            for (let i = 0; i < 3; i++) {
                let numRep = 0
                let repetidos = 1
                for (let j = 0; j < 3; j++) {
                    if (pontosColunas[i][0] == pontosColunas[i][1] && pontosColunas[i][0] != 0 && pontosColunas[i][1] != 0) {
                        repetidos++
                        numRep = parseInt(pontosColunas[i][0])
                    }
                    if (pontosColunas[i][0] == pontosColunas[i][2] && pontosColunas[i][0] != 0 && pontosColunas[i][2] != 0) {
                        repetidos++
                        numRep = parseInt(pontosColunas[i][0])
                    }
                    if (pontosColunas[i][1] == pontosColunas[i][2] && repetidos < 3 && pontosColunas[i][1] != 0 && pontosColunas[i][2] != 0) {
                        repetidos++
                        numRep = parseInt(pontosColunas[i][1])
                    }

                    if (pontosColunas[i][j] == numRep && pontosColunas[i][j] != 0) {
                        if (repetidos == 2) {
                            somaColuna[i] += ((numRep * repetidos) * repetidos) / 2
                        } else if (repetidos == 3) {
                            somaColuna[i] += ((numRep * repetidos) * repetidos) / 3
                        }
                    } else {
                        somaColuna[i] += pontosColunas[i][j];
                    }
                    numRep = 0
                    repetidos = 1
                }

            }
            for (let i = 0; i < 3; i++) {
                jogador.pontos[i] = somaColuna[i];
            }
            jogador.pontos
        },
        clicar_tabuleiro: function(e) {
            let tabuleiro = document.getElementById('tab_player')
            let rows = tabuleiro.children
            for (let x = 0; x < 3; x++) {
                let collum = rows[x].children
                for (let y = 0; y < 3; y++) {
                    let elemento = collum[y];
                    let posição = this.player.tabuleiro[x][y]
                    if (e.target == elemento && posição == "") {
                        this.player.posicionar_dado(x, y)
                        this.calcular_pontos(this.player)
                        console.log(player1.pontos)

                        this.player.jogar_dado()

                        this.bot.jogada()
                        this.calcular_pontos(this.bot)
                        console.log(player2.pontos)
                    }
                }
            }
        }
    }
}

function setar_click() {
    let tabuleiro = document.getElementById('tab_player')
    let rows = tabuleiro.children
    for (let x = 0; x < rows.length; x++) {
        let collum = rows[x].children

        for (let y = 0; y < collum.length; y++) {
            let elemento = collum[y];
            if (collum[y].tagName == 'TD') {
                let jogo = Jogo(player, bot)
                elemento.addEventListener("click", (e)=>{
                    jogo.clicar_tabuleiro(e)
                }
                );
            }
        }
    }
}
setar_click()
player.jogar_dado()
