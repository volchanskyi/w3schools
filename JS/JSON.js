/**
 * Created by Ivan on 11/28/2016.
 */

function myFirstJSON() {
    var text = '{"name":"JOhn Johnson","street":"Oslo West 16","phone":"555 123456"}';
    
    var obj = JSON.parse(text);
    
    document.getElementById("demo34").innerHTML = 
        obj.name + "<br>" + 
            obj.street + "<br>" + 
            obj.phone;
}

//JSON Uses JavaScript Syntax

function mySecondJSON() {
    var employees = [
        {
        "firstName":"John",
        "lasName":"Doe"
        },
        {
            "firstName":"Anna",
            "lasName":"Farris"
        },
        {
            "firstName":"Peter",
            "lasName":"Penn"
        }
    ];
    document.getElementById("demo34").innerHTML = 
        employees[0].firstName + " " + employees[0].lasName;
    
}



