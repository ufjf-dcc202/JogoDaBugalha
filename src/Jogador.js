import {atualizar_tela} from './Tela.js'
function Jogador(){
    let jogador = {
        pontos: [0,0,0],
        dado:0,
        tabuleiro:[[0,0,0],[0,0,0],[0,0,0]],
        posicionar_dado:function(x,y){
            let valor = this.dado
            this.tabuleiro[x][y]=valor;
        },
        jogar_dado:function(){
            let numero_aleatorio = Math.floor(Math.random() * 6) + 1;
            this.dado = numero_aleatorio
        }
    }
    return jogador ;
}


let player = Jogador()
player.jogar_dado()
player.posicionar_dado(1,1)
atualizar_tela(player)