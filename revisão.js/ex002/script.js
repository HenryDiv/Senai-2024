var num=[]
function add(){
    
    var input=document.getElementById("input").value
    num.push(input)
    document.getElementById("array").innerText = num

}
function del(){

    var input=document.getElementById("input").value
    num.pop(input)
    document.getElementById("array").innerHTML = num
}