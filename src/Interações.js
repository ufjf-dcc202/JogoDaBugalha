import{Jogador} from './Jogador.js'
import{Bot} from './Bot.js'

let player = Jogador()
let bot = Bot()
function Jogo(player1, player2){
    return{
        player:player1,
        bot:player2,
        calcular_pontos:function(jogador){
            function calcular_coluna(x){
                let tabuleiro = jogador.tabuleiro

                let peso = 1
                let ultimo_valor=0
                let pontos =0
                for (let i = 0; i < 3; i++) {
                    let valor_casa = tabuleiro[i][x]
                    if(valor_casa==ultimo_valor && valor_casa!=''){
                        peso++
                    }
                }
                pontos= tabuleiro[0][x] + tabuleiro[1][x] +tabuleiro[2][x]
                

                return pontos
            }
            for (let i = 0; i < 3; i++) {
                jogador.pontos[i]=calcular_coluna(i)
                
            }

        },
        clicar_tabuleiro:function(e){
            let tabuleiro = document.getElementById('tab_player')
            let rows = tabuleiro.children
            for (let x = 0; x < 3; x++) {
                let collum = rows[x].children
                for (let y = 0; y < 3; y++) {
                    let elemento = collum[y];
                    let posição = this.player.tabuleiro[x][y]
                    if(e.target==elemento && posição==""){
                        this.player.posicionar_dado(x,y)
                        this.calcular_pontos(this.player)
                        console.log(this.player.pontos)

                        this.player.jogar_dado()
                        this.bot.jogada()
                    }
                }
            }
        }
    }
}



function setar_click(){
    let tabuleiro = document.getElementById('tab_player')
    let rows = tabuleiro.children
    for (let x = 0; x < rows.length; x++) {
        let collum = rows[x].children
        
        for (let y = 0; y < collum.length; y++) {
            let elemento = collum[y];
            if (collum[y].tagName=='TD'){
                let jogo =Jogo(player,bot)
                elemento.addEventListener("click", (e)=>{jogo.clicar_tabuleiro(e)});
            }
        }
    }
}
setar_click()
player.jogar_dado()