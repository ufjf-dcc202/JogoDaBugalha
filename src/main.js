import { criaJogador } from './Jogador.js'
import { criaJogo } from './Jogo.js'
import { setar_click } from './definirInputs.js'
import {pre_carregar} from './Tela.js'
let divTabuleiroPlayer = document.querySelector('#tab_player')
let divDadoPlayer = document.querySelector('#dado_player')
let divPontoPlayer = document.querySelector('#pontos_player')

let divTabuleiroBot = document.querySelector('#tab_bot')
let divDadoBot = document.querySelector('#dado_bot')
let divPontoBot = document.querySelector('#pontos_bot')

let player = criaJogador(divTabuleiroPlayer, divDadoPlayer, divPontoPlayer,'player')
let bot = criaJogador(divTabuleiroBot, divDadoBot, divPontoBot,'bot')
let jogo = criaJogo(player, bot)

pre_carregar()
jogo.start()

setar_click(jogo)
