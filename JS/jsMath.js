/**
 * Created by Administrator on 9/22/2016.
 */
function myMath() {
    document.getElementById("demo5").innerHTML = Math.random();
}

function myMathMin() {
    document.getElementById("demo5").innerHTML = 
        Math.min(0, 150, 30, 35, -8, 9999);
}


function myMathMax() {
    document.getElementById("demo5").innerHTML =
        Math.max(0, 150, 30, 35, -8, 9.999);
}


function myMathRound() {
    document.getElementById("demo5").innerHTML = Math.round(4.4);
}

function myMathRoundUp() {
    document.getElementById("demo5").innerHTML = Math.ceil(4.4);
}

function myMathRoundDown() {
    document.getElementById("demo5").innerHTML = Math.floor(4.4);
}

function myRandomAndFloorExample() {
    document.getElementById("demo5").innerHTML =
        Math.floor(Math.random() * 11);
}

function myConstants() {
    document.getElementById("demo5").innerHTML =
        Math.E + "<br>" +
        Math.PI + "<br>" +
        Math.SQRT2 + "<br>" +
        Math.SQRT1_2 + "<br>" +
        Math.LN2 + "<br>" +
        Math.LN10 + "<br>" +
        Math.LOG2E + "<br>" +
        Math.LOG10E + "<br>";
}