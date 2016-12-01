/**
 * Created by Administrator on 10/5/2016.
 */
function myCondition() {
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young": "Old enough";
    document.getElementById("demo9").innerHTML = voteable + "to vote.";
}

function myConditionCheckNan() {
    var age, voteable;
    age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Error in input";
    } else {
        voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("demo9").innerHTML = voteable;
}

function myTimeCheck() {
    var time = new Date().getHours();
    var greeting;
    if ( time < 10) {
        greeting = "Good morning";
        
    } else if (time < 20) {
        greeting = "Good day!";
    } else {
        greeting = "Good evening!";
    }
    document.getElementById("demo9").innerHTML = greeting;
}

function myJsDateBorn() {
    var year = prompt("When the Ecma Script 5.1 was created?", " ");
    var cond = (year != 2011);
    if (cond) {
        alert("WRONG!");
    } else {
        alert("RIGHT!");
    }
}

function myShortComparison() {
    var age = prompt("How old are you?", "");
    var access = age > 14;
    alert(access);
}
