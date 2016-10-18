/**
 * Created by Ivan on 10/17/2016.
 */



function myErrorHandler() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo12").value;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw  "not a number";
        x = Number(x);
        if (x < 5) throw "too Low";
        if (x > 10) throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    } 
    }

function myErrorHandler2() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo12").value;
    try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    }
    catch (err) {
        message.innerHTML = "Input " + err;
    }
    finally {
        document.getElementById("demo12").value = "";
    }
    
}
