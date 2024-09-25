var num=[]

function add(){
    
    var input=document.getElementById("input").value
    num.push(Number(input))
    document.getElementById("array").innerText = num

}
function del(){

    var input=document.getElementById("input").value
    num.pop(input)
    document.getElementById("array").innerHTML = num
}
function compara(a,b){
    return a-b
}
function ordenar(){ 
    num.sort(compara)
    document.getElementById("maior").innerHTML=num

}
