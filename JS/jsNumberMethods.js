/**
 * Created by Administrator on 9/21/2016.
 */
//jsNumbersMethods

var x = 123;
console.log(x.toString());
console.log((123).toString());
console.log((100 + 23).toString());

var x = 9.656;

console.log(x.toExponential(2));
console.log(x.toExponential(4));
console.log(x.toExponential(6));




var x = 9.656;

console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));

function myGlobalNumber() {
document.getElementById("demo5").innerHTML =
    Number(true) + "<br>" +
    Number(false) + "<br>" +
    Number(new Date()) + "<br>" +
    Number("  10") + "<br>" +
    Number("10  ") + "<br>" +
    Number("10 6");

}

function myParseInt() {
    document.getElementById("demo5").innerHTML =
        parseInt("10") + "<br>" +
        parseInt("10.33") + "<br>" +
        parseInt("10 6 18") + "<br>" +
        parseInt("10 years") + "<br>" +
        parseInt("abc 10") + "<br>";
}

function myParseFloat() {
    document.getElementById("demo5").innerHTML =
        parseFloat("10") + "<br>" +
        parseFloat("10.33") + "<br>" +
        parseFloat("10 6 14") + "<br>" +
        parseFloat("10 years") + "<br>" +
        parseFloat("yeras 10") + "<br>";
}


function myNumberProperties() {
    document.getElementById("demo5").innerHTML = Number.MAX_VALUE;
    document.getElementById("demo5").innerHTML = Number.MIN_VALUE;
    document.getElementById("demo5").innerHTML = Number.NEGATIVE_INFINITY;
    document.getElementById("demo5").innerHTML = Number.POSITIVE_INFINITY;
}