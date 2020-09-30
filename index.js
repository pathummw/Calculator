let value1;
let value2;
let txtLog;
let operator;
let result;


function onClickBtn(value){
        txtLog = document.getElementById("textBox").value;
        document.getElementById("textBox").value = txtLog+value;
}

function onClickOperator(operatorValue) {
    operator=operatorValue;
    value1 = parseFloat(document.getElementById("textBox").value);
    document.getElementById("textBox").value='';

}

function onClickEquel(){

    if(!isNaN(parseFloat(document.getElementById("textBox").value))){
        value2 = parseFloat(document.getElementById("textBox").value);
        document.getElementById("textBox").value = '';
    }
    if(!isNaN(value1) && !isNaN(value2)){
        doMath();
    }
    
}

function doMath(){

    switch(operator){
        case "/":
            result = value1 / value2;
            break;
        case "x":
            result = value1 * value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "+":
            result = value1 + value2;
            break;
        default:
            console.log("Error");
    }

    document.getElementById("textBox").value = result;
    
}

function onClickClear() {
    document.getElementById("textBox").value = '';
}


