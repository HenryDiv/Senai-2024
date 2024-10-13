var nomeGlobal
var msgGlobal
var imgatual="img/buzz.jpg";
var imganterior="img/ponto-de-interrogacao.png";

function trocar(){
   var link="https://open.spotify.com/intl-pt/album/6PBZN8cbwkqm1ERj2BGXJ1?si=cxXtjxLQQpqAWW0TziHUiQ";
   window.open(link,'_blank') ; 
}
function ConferirMensagem(){
    var nome=document.getElementById("nome").value;
    var mensagem=document.getElementById("mensagem").value;
    var confDiv=document.getElementById("rightDiv")

nomeGlobal=nome
msgGlobal=mensagem
confDiv.style.display="flex"

document.getElementById("confNome").textContent=nome;
document.getElementById("confMsg").textContent=mensagem;

}

function enviar(){
    var numeroTelefone="5541996761342";

    var link= "https://wa.me/" + numeroTelefone + "?text=Nome: "+ nomeGlobal + "-" +"Mensagem: " +msgGlobal;
    window.open(link,'_blank') ;  
}
