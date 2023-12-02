import {atualizar_tela} from './Tela.js'

function Jogador(div_tabuleiro, div_dado) {
    let jogador = {
        pontos: [0, 0, 0],
        dado: 0,
        tabuleiro_div: div_tabuleiro,
        dado_div: div_dado,
        tabuleiro: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        posicionar_dado: function(x, y) {
            let valor = this.dado
            this.tabuleiro[x][y] = valor;
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
            this.jogar_dado();
            this.posicionar_dado(posx, posy)
        }
    }
    return jogador;
}

export {Jogador}
