function welcome(){
    let userInput = document.getElementById("userInput").value
    let userName = document.getElementById("userName")
    userName.innerHTML = userInput
    console.log(userName)
}


function calc(){
    let numOne=document.getElementById("num1").value
    let numTwo=document.getElementById("num2").value
    let resultHolder=document.getElementById("resultHolder")

    let sign=document.getElementById("sign").value
    let result
    if(sign == "+"){
        result = numOne + " + " + numTwo + " = " +
        String(Number(numOne) + Number(numTwo))
    }
    else if(sign == "-"){
        result = numOne + " - " + numTwo + " = " +
        String(Number(numOne) - Number(numTwo))
    }
    else if(sign == "*"){
        result = numOne + " * " + numTwo + " = " +
        String(Number(numOne) * Number(numTwo))
    }
    else if(sign == "/"){
        result = numOne + " / " + numTwo + " = " +
        String(Number(numOne) / Number(numTwo))
    }
    else{
        result = "Not valid inputs"
    }



    resultHolder.innerHTML = result
}