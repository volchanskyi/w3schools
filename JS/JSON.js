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

//JSON Example - Object From String


function myObjFromString() {
    var text = '{"employees":[' +
            '{"firstName":"John","lastName":"Doe"},' +
        '{"firstName":"Peter","lastName":"Pann"},' +
        '{"firstName":"Anna","lastName":"Farris" }]}';

    var obj = JSON.parse(text);
    document.getElementById("demo34").innerHTML =
        obj.employees[1].firstName + " " + obj.employees[1].lastName;
}

//Using eval()
// Older browsers without the support for
//     the JavaScript function JSON.parse() can use the eval() function
// to convert a JSON text into a JavaScript object:

function myEvalFunc() {
    var txt = '{"employees":[' + 
            '{"firstName":"Ivan","lastName":"Volchanskyi"},' +
        '{"firstName":"Inga","lastName":"Volchanskaya"},' +
        '{"firstName":"Sergey","lastName":"Volchanskyi"}]}';
    
    var obj = eval("(" + txt + ")");
    
    document.getElementById("demo34").innerHTML = 
        obj.employees[1].firstName + " " + obj.employees[1].lastName;
}

// --------------------------
//Create an array of objects


    var myJsonArr = [
        {
            "display": "JavaScript Tutorial",
            "url": "http://www.w3schools.com/js/default.asp"
        },
        {
            "display": "HTML Tutorial",
            "url": "http://www.w3schools.com/html/default.asp"
        },
        {
            "display": "CSS Tutorial",
            "url": "http://www.w3schools.com/css/default.asp"
        }
    ];



//Create a JavaScript function to display the array
function myJsonArrDisplayer(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
            arr[i].display + '</a><br>';
    }
    document.getElementById("demo34").innerHTML = out;
}

// Read the text file with an XMLHttpRequest
function myJsonHttpReq() {
    var xmlHttp = new XMLHttpRequest();
    var url = "myTutorials.txt";

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myJsonArrDisplayer(myArr);
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}




