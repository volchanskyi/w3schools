/**
 * Created by Administrator on 10/7/2016.
 */


function mySwitch() {
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
            break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
       day = "Something is wrong";
}
    document.getElementById("demo9").innerHTML = day;
}


function myCheckFruit() {
    var text;
    var fruits = document.getElementById("myInput").value;
    
    switch(fruits.toLowerCase()) {
        case "banana":
            text = "Banana is good!";
            break;

        case "orange":
            text = "I am not a fan of orange";
            break;
        case "apple":
            text = "Apple is very healthy";
            break;
        default:
            text = "I have never heard of that fruit.";
    } 
    document.getElementById("demo9").innerHTML = text;
}