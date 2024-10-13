var num=[1,2,3,4,3,5,8]

function Buscar(){
    
    var input=document.getElementById("input").value
    var indice=num.indexOf(Number(input))
    document.getElementById("add").innerText = indice
    document.getElementById("array").innerHTML=num

}
