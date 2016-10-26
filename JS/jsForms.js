/**
 * Created by Ivan on 10/25/2016.
 */


function myFormValidation() {
    var x = document.forms["myForm"]["fname"].value;
    if (x === null || x.length < 3) {
        alert("Name must be filled out");
        return false;
    }
}

function myFormValidNumbers() {
    var text;
    var x = document.getElementById("numb").value;
    var y = document.getElementById("demo13");

    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    y.innerHTML = text;
}