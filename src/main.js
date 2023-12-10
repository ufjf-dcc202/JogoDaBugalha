import { criaJogador } from './Jogador.js'
import { criaJogo } from './Jogo.js'

let divTabuleiroPlayer = document.querySelector('#tab_player')
let divDadoPlayer = document.querySelector('#dado_player')
let divPontoPlayer = document.querySelector('#pontos_player')

let divTabuleiroBot = document.querySelector('#tab_bot')
let divDadoBot = document.querySelector('#dado_bot')
let divPontoBot = document.querySelector('#pontos_bot')

let player = criaJogador(divTabuleiroPlayer, divDadoPlayer, divPontoPlayer)
let bot = criaJogador(divTabuleiroBot, divDadoBot, divPontoBot)
let jogo = criaJogo(player, bot)
jogo.start()

function setar_click() {
    let tabuleiro = document.getElementById('tab_player')
    let rows = tabuleiro.children
    for (let x = 0; x < rows.length; x++) {
        let collum = rows[x].children
        for (let y = 0; y < collum.length; y++) {
            let elemento = collum[y];
            if (collum[y].tagName == 'TD') {
                console.log(elemento)

                elemento.addEventListener("click", (e) => {
                    jogo.pegarPosicoes(e)
                }
                );
            }
        }
    }
}
setar_click()
