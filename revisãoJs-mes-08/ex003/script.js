var jogador ="X"
var position=['','','','','','','','','']

function jogar(quadrado, index){

    if(quadrado.innerHTML==""){
        quadrado.innerHTML = jogador
        position[index]=jogador
        if(jogador=='X'){
            jogador="O"
        }else{
            jogador="X"
        }
    }

}
function resetar(){
    window.location.reload(true);
}



