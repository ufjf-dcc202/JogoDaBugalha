import {atualizar_tela} from './Tela.js'
function Bot(){
    let jogador = {
        pontos: [0,0,0],
        dado:0,
        tabuleiro_div:document.getElementById('tab_bot'),
        dado_div:document.getElementById('dado_bot'),

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
        },
        jogada:function(){
            let posx 
            let posy
            do {
                 posx = (Math.floor(Math.random() * 3) + 1)-1; 
                 posy = (Math.floor(Math.random() * 3) + 1)-1; 
                
            } while (this.tabuleiro[posx][posy]!="");
            this.jogar_dado();
            this.posicionar_dado(posx,posy)
        }
    }
    return jogador ;
}


export{ Bot}