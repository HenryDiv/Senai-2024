function checkMajority(){
    var wasBorn=document.getElementById("clientBirth").valueAsNumber;
    var res=document.getElementById("result");

    if(isNaN(wasBorn)){
        res.textContent="Type only numbers"
        res.style.color="red"
        return;
    }
    const thisYear=new Date().getFullYear();
    const age=thisYear-wasBorn;

    console.log(age)

    if(age>=18){
        res.textContent="over 18, entry"
        res.style.color="green"
        document.getElementById("clienteAge").textContent=`${age} - years old`;
    }else{
        res.textContent="under 18, get the fuck out"
        res.style.color="red"
    }

}