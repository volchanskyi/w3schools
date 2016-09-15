/**
 * Created by Administrator on 9/15/2016.
 */
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

document.getElementById("demo").innerHTML = toCelsius(77);

var x = toCelsius(88);
var text = "The temperature is " + x + " Celsius";
console.log(text);


