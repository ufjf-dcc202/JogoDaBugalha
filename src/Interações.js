import { Jogador } from './Jogador.js'
import { Jogo } from './Jogo.js'
import { atualizar_tela } from './Tela.js'

let divTabuleiroPlayer = document.getElementById('tab_player')
let divDadoPlayer = document.getElementById('dado_player')
let divPontoPlayer = document.querySelector('#pontos_player')
let player = Jogador(divTabuleiroPlayer, divDadoPlayer, divPontoPlayer)

let divTabuleiroBot = document.getElementById('tab_bot')
let divDadoBot = document.getElementById('dado_bot')
let divPontoBot = document.querySelector('#pontos_bot')
let bot = Jogador(divTabuleiroBot, divDadoBot, divPontoBot)


let Jogo = Jogo(player,bot)


function setar_click() {
    let tabuleiro = document.getElementById('tab_player')
    let rows = tabuleiro.children
    for (let x = 0; x < rows.length; x++) {
        let collum = rows[x].children

        for (let y = 0; y < collum.length; y++) {
            
            let elemento = collum[y];
            if (collum[y].tagName == 'TD') {
                let jogo = Jogo(player, bot)
                elemento.addEventListener("click", (e) => {
                    jogo.pega_posições(e)
                });
            }
        }
    }
}
setar_click()


