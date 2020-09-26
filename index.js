

const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const div5 = document.querySelector(".div5");
const div6 = document.querySelector(".div6");
const div7 = document.querySelector(".div7");
const div8 = document.querySelector(".div8");
const div9 = document.querySelector(".div9");
const div10 = document.querySelector(".div10");
const divmulti = document.querySelector(".div-multi");
const divdiv = document.querySelector(".div-div");
const divplus = document.querySelector(".div-plus");
const divmin = document.querySelector(".div-min");
const divequal = document.querySelector(".div-eq");
const divdel = document.querySelector(".div-del");
const display = document.querySelector("#display");
let number1;
let wrappedNum1;
let wrappedNum2;
let displayResult;
let operator;

div1.addEventListener("click", () => {
    display.innerHTML += div1.innerHTML;
    number1 = parseInt(display.innerHTML);
    console.log(number1);
});
div2.addEventListener("click", () => {
    display.innerHTML += div2.innerHTML;
    number1 = parseInt(display.innerHTML);
    console.log(number1);
});
div3.addEventListener("click", () => {
    display.innerHTML += div3.innerHTML;
    number1 = parseInt(display.innerHTML);
});
div4.addEventListener("click", () => {
    display.innerHTML += div4.innerHTML;
    number1 = parseInt(display.innerHTML);
});
div5.addEventListener("click", () => {
    display.innerHTML += div5.innerHTML;
    number1 = parseInt(display.innerHTML);
});
div6.addEventListener("click", () => {
    display.innerHTML += div6.innerHTML;
    number1 = parseInt(display.innerHTML);
});
div7.addEventListener("click", () => {
    display.innerHTML += div7.innerHTML;
    number1 = parseInt(display.innerHTML);
});
div8.addEventListener("click", () => {
    display.innerHTML += div8.innerHTML;
    number1 = parseInt(display.innerHTML);
});
div9.addEventListener("click", () => {
    display.innerHTML += div9.innerHTML;
    number1 = parseInt(display.innerHTML);
});
div10.addEventListener("click", () => {
    display.innerHTML += div10.innerHTML;
    number1 = parseInt(display.innerHTML);
});

// Operators

divmulti.addEventListener("click", () => {
    display.innerHTML = divmulti.innerHTML;
    wrappedNum1 = number1;
    number1 = null;
    display.innerHTML = "";
    operator = divmulti.innerHTML;
});
divplus.addEventListener("click", () => {
    display.innerHTML += divplus.innerHTML;
    wrappedNum1 = number1;
    number1 = null;
    display.innerHTML = "";
    operator = divplus.innerHTML;
});
divmin.addEventListener("click", () => {
    display.innerHTML += divmin.innerHTML;
    wrappedNum1 = number1;
    number1 = null;
    display.innerHTML = "";
    operator = divmin.innerHTML;
});
divdiv.addEventListener("click", () => {
    display.innerHTML += divdiv.innerHTML;
    wrappedNum1 = number1;
    number1 = null;
    display.innerHTML = "";
    operator = divdiv.innerHTML;
});

divdel.addEventListener("click", () => {
    display.innerHTML += divdel.innerHTML;
});

function multiResult(param1, param2) {
    displayResult = param1 * param2;
    return (display.innerHTML = displayResult);
}

function sumResult(param1, param2) {
    displayResult = param1 + param2;
    return (display.innerHTML = displayResult);
}
function minResult(param1, param2) {
    displayResult = param1 - param2;
    return (display.innerHTML = displayResult);
}
function divResult(param1, param2) {
    displayResult = param1 / param2;
    return (display.innerHTML = displayResult);
}

divequal.addEventListener("click", () => {
    display.innerHTML = divequal.innerHTML;
    wrappedNum2 = parseInt(number1);
    if (operator == "+") {
        display.innerHTML = sumResult(wrappedNum1, wrappedNum2);
    } else if (operator == "*") {
        display.innerHTML = multiResult(wrappedNum1, wrappedNum2);
    } else if (operator == "/") {
        display.innerHTML = divResult(wrappedNum1, wrappedNum2);
    } else if (operator == "-") {
        display.innerHTML = minResult(wrappedNum1, wrappedNum2);
    }
});

divdel.addEventListener("click", () => {
    display.innerHTML = "";
});
