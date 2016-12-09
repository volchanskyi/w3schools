/**
 * Created by Administrator on 10/5/2016.
 */
"use strict";
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


function myShortCond() {
    var myAge = prompt("What`s your myAge?", 18);
    var myCond = (myAge < 18) ? "Hello you`re little!" :
        (myAge > 18) ? "What`s up man?" :
            (myAge > 100) ? "No freaking way  you are so old!" :
                "What a weird myAge...";
    alert(myCond);
}

function myLognCheck() {
    var askLogin = prompt("Put username. the username is case sensitive", "");
    // var admin = askLogin.toLowerCase();


    if (askLogin === "admin") {
        var pass = prompt("Password?", "");
        if (pass === "1234") {
            alert("Welcome!");
        } else if (pass === null) {
            alert("You have to put password");
        } else {
            alert("The password is wrong");
        }
    } else if (askLogin === null) {
        alert("Please enter username");
    } else {
        alert("The username is not recognized");
    }
}

function myOfficeHoursCheck() {
    var hour = 12, isWeekend = true;
    if (hour < 10 || hour > 18 || isWeekend) {
        alert("Office working hours from 10 to 18");
    }
}
function myOrExamp() {
    var undef, zero = 0, emptyStr = "", msg = "Hi!";
    var result = undef || zero || emptyStr || msg || 0;
    alert(result);
}