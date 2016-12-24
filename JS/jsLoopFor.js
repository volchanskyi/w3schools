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


//Loop through object

function loopCountryCodes() {
    var codes = {
        "+7": "Russia",
        "+38": "Ukraine",
        "+1": "USA"
    };

    for (var code in codes) {
        var value = codes[code];
        code = +code;

        alert( code + ": " + value);
    }
}


//Check if the obj is empty


function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

function setAlarm() {
    var schedule = {};
    var wakeUp = prompt("What is wake up time?", "");
    var goToBed = prompt("What is go to bed time?", "");

    // if (wakeUp && goToBed === null || undefined) {
    //     alert("Please enter wake up and go to bed time");
    // }
    //

    alert( isEmpty(schedule) ); //true

    schedule["wakeUp"] = wakeUp;
    schedule["goToBed"] = goToBed;

    alert( isEmpty(schedule) ); //false

}

//Sum properties
"use strict";

function checkSalaris(obj) {
    var sum = 0;
    
    for (var key in obj) {
        sum += obj[key];
    }
    return sum;
}


function getSalaries() {
    var salaries = {};
    var accSalary = prompt("Account salary?", "");
    var itSalary = prompt("IT Dept. salary?", "");
    var execSalary = prompt("Executives salary?", "");
    
    alert( checkSalaris(salaries) );

    salaries["accountSalary"] = +accSalary;
    salaries["itDeptSalary"] = +itSalary;
    salaries["executivesSalary"] = +execSalary;

    alert( checkSalaris(salaries) );
}





