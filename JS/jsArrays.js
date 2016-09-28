/**
 * Created by Administrator on 9/22/2016.
 */
var fruits, text, fLen, i;
var points = [40, 100, 1, 5, 25, 10];
function myArray() {
    

    fruits = ["Banana", "Apple", "Mango", "Orange"];
    fLen = fruits.length;
    text = "<ul>";
    for (i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("demo6").innerHTML = text;
}

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo6").innerHTML = fruits;

    function myArray2() {
        fruits.push("Lemon");
        document.getElementById("demo6").innerHTML = fruits;
    }


function myArray3() {
    fruits[fruits.length] = "Lemon";
    document.getElementById("demo6").innerHTML = fruits;
}


function myWrongArray() {
    fruits[6] = "Lemon";

    fLen = fruits.length;
    text = "";
    for (i = 0; i < fLen; i++) {
        text += fruits[i] + "<br>";
    }
    document.getElementById("demo6").innerHTML = text;
}


function myRigthArray() {
    document.getElementById("demo6").innerHTML = points[0] + " " + "<b>" + "The new keyword only complicates the code. It can also produce some unexpected results. Use [] instead." + "</b>";
    
}

function myArrayTypeOfCheck() {
    document.getElementById("demo6").innerHTML = Array.isArray(points) + " " + "This is how you can recognize if it`s array or an object";

}

function myArrayTypeOfCheck2() {
    fruits = ["banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo6").innerHTML = fruits instanceof Array;
}