function Jogador(div_tabuleiro, div_dado, div_pontos) {
    let jogador = {
        pontos: [0, 0, 0],
        dado: 0,
        ponto_total: 0,
        tabuleiro_div: div_tabuleiro,
        dado_div: div_dado,
        div_pontos: div_pontos,
        tabuleiro: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],

        posicionar_dado: function (x, y) {
            let valor = this.dado
            this.tabuleiro[x][y] = valor;
            this.calcular_pontos_coluna()
            this.calcular_total_pontos()
        },
        jogar_dado: function () {
            let numero_aleatorio = Math.floor(Math.random() * 6) + 1;
            this.dado = numero_aleatorio

        },
        jogada: function () {
            let posx
            let posy
            do {
                posx = (Math.floor(Math.random() * 3) + 1) - 1;
                posy = (Math.floor(Math.random() * 3) + 1) - 1;

            } while (this.tabuleiro[posx][posy] != "");
            this.posicionar_dado(posx, posy)
            return [posx, posy]
        },

        calcular_pontos_coluna: function () {
            let somaColuna = [0, 0, 0]
            let tabuleiro = this.tabuleiro
            for (let i = 0; i < 3; i++) {
                let numRep = 0
                let repetidos = 1
                for (let j = 0; j < 3; j++) {
                    if (tabuleiro[0][i] == tabuleiro[1][i] && tabuleiro[0][i] != 0 && tabuleiro[1][i] != 0) {
                        repetidos++
                        numRep = tabuleiro[0][i]
                    }
                    if (tabuleiro[0][i] == tabuleiro[2][i] && tabuleiro[0][i] != 0 && tabuleiro[2][i] != 0) {
                        repetidos++
                        numRep = tabuleiro[0][i]
                    }
                    if (tabuleiro[1][i] == tabuleiro[2][i] && repetidos < 3 && tabuleiro[1][i] != 0 && tabuleiro[2][i] != 0) {
                        repetidos++
                        numRep = tabuleiro[1][i]
                    }

                    if (tabuleiro[j][i] == numRep && tabuleiro[j][i] != 0) {
                        somaColuna[i] += (numRep * repetidos)
                    } else {
                        somaColuna[i] += tabuleiro[j][i];
                    }
                    numRep = 0
                    repetidos = 1
                }
            }
            for (let i = 0; i < 3; i++) {
                jogador.pontos[i] = somaColuna[i];
            }
        },
        calcular_total_pontos: function () {
            const pontos = this.pontos

            const tamanho = pontos.length
            this.ponto_total = 0

            for (let i = 0; i < tamanho; i++) {
                this.ponto_total += pontos[i]
            }

        }
    }
    return jogador;
}

export { Jogador }
