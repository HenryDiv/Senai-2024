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
function maior(){
    
    var maior = 0;
    for (var i = 0; i < num.length; i++) {
       if ( num[i] > maior ) {
          maior = num[i];
       }
    }
    document.getElementById("maior").innerHTML=maior

}
