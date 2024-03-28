const display = document.querySelector(".display");

display.value = 0;

const buttons = document.querySelectorAll(".btn");

let operand1 = "";
let operand2 = "";
let operator = "";
let clearDisplay = false;
// let result = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.innerHTML);
        performAction(button.innerHTML);
    })
});


const performAction = (btnText) => {

    if (btnText == "CE") {
        display.value = 0;
        operand1 = "";
        operand2 = "";
        operator = "";
        clearDisplay = true;
    } else {
        if (btnText == "C") {

            if (operand1 != "" && operator == "") {
                display.value = 0;
                operand1 = "";
                operand2 = "";
                operator = "";
                clearDisplay = true;
                console.log("operand1: ", operand1);
                console.log("operator: ", operator);
                console.log("operand2: ", operand2);
            }
            else {
                display.value = 0;
                clearDisplay = true;
                console.log("operand1: ", operand1);
                console.log("operator: ", operator);
                console.log("operand2: ", operand2);
            }
        }
        else {
            if (btnText == "=") {
                if (operand1 != "" && operator != "") {
                    operand2 = display.value;
                    console.log("operand1: ", operand1);
                    console.log("operator: ", operator);
                    console.log("operand2: ", operand2);
                    let result = eval(operand1 + operator + operand2);
                    console.log(result);
                    display.value = result;
                    operand1 = result;
                    operand2 = "";
                    operator = "";
                    console.log("operand1: ", operand1);
                    console.log("operator: ", operator);
                    console.log("operand2: ", operand2);
                }
            }
            else {
                if (btnText == "+" || btnText == "-" || btnText == "X" || btnText == "/") {
                    if (operand1 == "") {
                        operand1 = display.value;
                        console.log("operand1: ", operand1);
                        if (btnText == "X")
                            operator = "*";
                        else
                            operator = btnText;
                        console.log("operator: ", operator);
                        clearDisplay = true;
                    }
                    else {
                        if (operand2 == "" && operator != "") {
                            // operator = btnText;
                            clearDisplay = true;
                            operand2 = display.value;
                            console.log("operand2: ", operand2);
                            let result = eval(operand1 + operator + operand2);
                            console.log(result);
                            display.value = result;
                            operand1 = result;
                            operand2 = "";
                            if (btnText == "X")
                                operator = "*";
                            else
                                operator = btnText;
                            console.log("operand1: ", operand1);
                            console.log("operator: ", operator);
                            console.log("operand2: ", operand2);
                        }
                        else {
                            if (operand1 != "") {
                                if (btnText == "X")
                                    operator = "*";
                                else
                                    operator = btnText;
                                console.log("operator: ", operator);
                                clearDisplay = true;
                            }
                        }

                    }

                }
                else {
                    if (display.value == "0" && operand1 != "0" && operator == "") {
                        display.value = btnText;
                        clearDisplay = false;
                    }
                    else {
                        if (clearDisplay) {
                            display.value = btnText;
                            clearDisplay = false;
                        }
                        else {
                            display.value = display.value + btnText;
                        }
                    }
                }
            }
        }
    }
}

