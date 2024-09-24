

function verifica(){
    var input=parseInt(document.getElementById("input").value)
    console.log(input)
    if(input>80 & input<=120){
        alert("infração média")
    }
    if(input>120){
        alert("infração grave")
    }
}
