export function criaJogador(div_tabuleiro, div_dado, div_pontos) {
    return {
        pontos: [0, 0, 0],
        dado: 0,
        ponto_total: 0,
        tabuleiro_div: div_tabuleiro,
        dado_div: div_dado,
        div_pontos: div_pontos,
        tabuleiro: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],

        posicionar_dado: function(x, y) {
            let valor = this.dado
            this.tabuleiro[x][y] = valor;
            this.calcular_pontos_coluna()
            this.calcularPontoTotal()
        },
        jogar_dado: function() {
            let numeroAleatorio = Math.floor(Math.random() * 6) + 1;
            this.dado = numeroAleatorio

        },
        jogada: function() {
            let posx
            let posy
            do {
                posx = (Math.floor(Math.random() * 3) + 1) - 1;
                posy = (Math.floor(Math.random() * 3) + 1) - 1;

            } while (this.tabuleiro[posx][posy] != "");
            this.posicionar_dado(posx, posy)
            return [posx, posy]
        },

        calcular_pontos_coluna: function() {
            let somaColuna = [0, 0, 0]
            let tabuleiro = this.tabuleiro
            for (let i = 0; i < 3; i++) {
                let numeroRepetido = 0
                let repeticoes = 1
                for (let j = 0; j < 3; j++) {
                    if (tabuleiro[0][i] == tabuleiro[1][i] && tabuleiro[0][i] != 0 && tabuleiro[1][i] != 0) {
                        repeticoes++
                        numeroRepetido = tabuleiro[0][i]
                    }
                    if (tabuleiro[0][i] == tabuleiro[2][i] && tabuleiro[0][i] != 0 && tabuleiro[2][i] != 0) {
                        repeticoes++
                        numeroRepetido = tabuleiro[0][i]
                    }
                    if (tabuleiro[1][i] == tabuleiro[2][i] && repeticoes < 3 && tabuleiro[1][i] != 0 && tabuleiro[2][i] != 0) {
                        repeticoes++
                        numeroRepetido = tabuleiro[1][i]
                    }

                    if (tabuleiro[j][i] == numeroRepetido && tabuleiro[j][i] != 0) {
                        somaColuna[i] += (numeroRepetido * repeticoes)
                    } else {
                        somaColuna[i] += tabuleiro[j][i];
                    }
                    numeroRepetido = 0
                    repeticoes = 1
                }
            }
            for (let i = 0; i < 3; i++) {
                this.pontos[i] = somaColuna[i];
            }
        },
        calcularPontoTotal: function() {
            const pontos = this.pontos

            const tamanho = pontos.length
            this.ponto_total = 0

            for (let i = 0; i < tamanho; i++) {
                this.ponto_total += pontos[i]
            }
        }
    }
}
