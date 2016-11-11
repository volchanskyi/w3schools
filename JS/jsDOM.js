/**
 * Created by Administrator on 11/1/2016.
 */


function myDOM() {
    var x = document.getElementsByTagName("p");
    console.log(x);
    document.getElementById("demo16").innerHTML = "The first paragraph is " + x[0].innerHTML;
}


function myDOM2() {
    var x = document.getElementById("demo");
    var y = x.getElementsByTagName("p");
    document.getElementById("demo16").innerHTML = 
        "The first paragraph inside 'demo' is : " + y[0].innerHTML;
}

function myDOM3() {
    var x = document.getElementsByClassName("demo17");
    document.getElementById("demo16").innerHTML = 
        "The first paragraph (index 0) with class='demo17': "  + x[0].innerHTML;
}

//Finding HTML Elements by CSS Selectors
function myDOM4() {
    var x = document.querySelectorAll("p.demo17");
    document.getElementById("demo16").innerHTML =
        "The first paragraph(index 0) with class='demo17': " + x[0].innerHTML;
}

//Finding HTML Elements by HTML Object Collections

function myDOM5() {
    // function myFunction() {
        var x = document.forms["frm1"];
        var text = "";
        var i;
        for (i = 0; i<x.length; i++) {
            text += x.elements[i].value + "<br>";
        }
        document.getElementById("demo18").innerHTML = text;
    // }
}

function myCSSDOM() {
    document.getElementById("demo18").style.color = "blue";
    document.getElementById("demo18").style.fontFamily = "Arial";
    document.getElementById("demo18").style.fontSize = "larger";
}

