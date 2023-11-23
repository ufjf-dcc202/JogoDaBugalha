
player = {
    pontos: [0,0,0],
    dado:0,
    tabuleiro:[[0,0,0],[0,0,0],[0,0,0]],
    posicionar_dado:function(x,y,valor){
        console.log(this)
        this.tabuleiro[x][y]=valor;
    },
    jogar_dado:function(){
        dado = Math.random(1,6)
    }
}
