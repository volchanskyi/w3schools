/**
 * Created by Ivan on 10/7/2016.
 */
function myLoopFor() {
    var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    var text = "";
    var i;
    cars.sort(); //using sort on the array
    for (i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
        
    }
    document.getElementById("demo9").innerHTML = text;
}

function myLoopWithBreak() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) {break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("demo9").innerHTML = text;
}


function myContinueLoop() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) {continue;}
        text += "The number is " + i + "<br>";
    }
    document.getElementById("demo10").innerHTML = text;
}

function myLabelLoop() {
    var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    var text = "";

    list: {
        text += cars[0] + "<br>";
        text += cars[1] + "<br>";
        text += cars[2] + "<br>";
        break list;
        text += cars[3] + "<br>";
        text += cars[4] + "<br>";
        text += cars[5] + "<br>";
    }
    document.getElementById("demo10").innerHTML = text;
}
"use strict";

function mySmartCond() {
    while (true) {
        var sum = 0;
        var value = +prompt("Enter a number", " ");
        if (!value)break;
        sum += value;
        alert("You put a number" + sum);
    } 
    
    alert("You didn`t put a number");
}

function myContinueLoop() {
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) continue;
        alert(i);
    }
}


//Loop that takes coordinates
function myTagLoop() {
    outer: for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var input = prompt("value in coordinates " +i+","+j, "");
            if (!input) break outer;
        }
    }
    alert("Done!");
}
