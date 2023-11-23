import {atualizar_tela} from './Tela.js'
function Jogador(){
    let jogador = {
        pontos: [0,0,0],
        dado:0,
        tabuleiro:[["","",""],["","",""],["","",""]],
        posicionar_dado:function(x,y){
            let valor = this.dado
            this.tabuleiro[x][y]=valor;
            atualizar_tela(jogador)
        },
        jogar_dado:function(){
            let numero_aleatorio = Math.floor(Math.random() * 6) + 1;
            this.dado = numero_aleatorio
            atualizar_tela(jogador)
        }
    }
    return jogador ;
}


export{ Jogador}