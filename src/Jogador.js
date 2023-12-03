import {atualizar_tela} from './Tela.js'

function Jogador(div_tabuleiro, div_dado, div_pontos) {
    let jogador = {
        pontos: [0, 0, 0],
        dado: 0,
        ponto_total:0,
        tabuleiro_div: div_tabuleiro,
        dado_div: div_dado,
        div_pontos:div_pontos,
        tabuleiro: [[0, 0, 0],
                     [0, 0, 0],
                      [0, 0, 0]],
                      
        posicionar_dado: function(x, y) {
            let valor = this.dado
            this.tabuleiro[x][y] = valor;
            this.calcular_pontos_coluna()
            this.calcular_total_pontos()
        },
        jogar_dado: function() {
            let numero_aleatorio = Math.floor(Math.random() * 6) + 1;
            this.dado = numero_aleatorio
            
        },
        jogada: function() {
            let posx
            let posy
            do {
                posx = (Math.floor(Math.random() * 3) + 1) - 1;
                posy = (Math.floor(Math.random() * 3) + 1) - 1;

            } while (this.tabuleiro[posx][posy] != "");
            this.posicionar_dado(posx, posy)
        },

        calcular_pontos_coluna: function() {
            let somaColuna = [0, 0, 0]
            let pontosColunas = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
            let tabuleiro = this.tabuleiro
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
        },
        calcular_total_pontos: function(){
            const pontos = this.pontos
           
            const tamanho = pontos.length
            this.ponto_total=0

            for (let i = 0; i < tamanho; i++) {
                this.ponto_total+=pontos[i]
            }
            
        }
    }
    return jogador;
}

export {Jogador}
