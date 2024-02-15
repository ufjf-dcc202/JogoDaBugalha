import { brilharRepetido, piscaPosicinar } from "./Tela.js";
export function criaJogador(div_tabuleiro, div_dado, div_pontos,nome) {
    
    return {
        nome:nome,
        tabuleiroCtn: div_tabuleiro,
        dadoCtn: div_dado,
        pontoCtn: div_pontos,
        tabuleiro: [[0, 0, 0], [0, 0, 0],[0, 0, 0]],
        pontos: [0, 0, 0],
        pontoTotal: 0,
        dado: 0,
        status: '',
        
        posicionarDado: function (x, y) {
            let valor = this.dado
            this.tabuleiro[x][y] = valor;
            this.calcularColunas()
            piscaPosicinar( x, y,this.tabuleiroCtn)
            this.calcularPontoTotal()
        },
        rolarDado: function () {
            let numeroAleatorio = Math.floor(Math.random() * 6) + 1;
            this.dado = numeroAleatorio

        },
        fazerJogada: function () {
            let posx
            let posy
            let jogarAleatorio=()=> {
                do {
                    posx = (Math.floor(Math.random() * 3) + 1) - 1;
                    posy = (Math.floor(Math.random() * 3) + 1) - 1;
                } while (this.tabuleiro[posx][posy] != "");
                this.posicionarDado(posx, posy)
            }
            

            let numeroNaColuna = false
            let colunaCheia=true
            let coluna = 0
            
            for (let i = 0; i < 3; i++) {
                
                for (let j = 0; j < 3; j++) {
                    if(this.dado==this.tabuleiro[i][j]){

                        numeroNaColuna = true
                        coluna=j
                        break
                    }                    
                }
            }

            for (let i = 0; i <3; i++) {
                if(this.tabuleiro[i][coluna]==0){
                    colunaCheia=false
                }
            }

            if(numeroNaColuna==true && colunaCheia==false){

                posx = coluna
                do {
                    posy = (Math.floor(Math.random() * 3) + 1) - 1;

                } while (this.tabuleiro[posy][posx] !=0);

                console.log("jogada inteligente",posy,posx,this.tabuleiro)

                this.posicionarDado(posy, posx)
                return [posx, posy]

            }else{
                jogarAleatorio()
                return [posx, posy]

            }

        },

        calcularColunas: function () {
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
        calcularPontoTotal: function () {
            const pontos = this.pontos
            const tamanho = pontos.length
            this.pontoTotal = 0
            for (let i = 0; i < tamanho; i++) {
                this.pontoTotal += pontos[i]
            }
        }
    }
}