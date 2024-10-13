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
function pares(){
    let par=[]
    for (var i = 0; i < num.length; i++) {
        if(num[i]%2==0){
            par.push(num[i])
        }
    }
    document.getElementById("par").innerHTML=par
}

