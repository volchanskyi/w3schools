/**
 * Created by Administrator on 9/22/2016.
 */
var fruits, text, fLen, i;
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