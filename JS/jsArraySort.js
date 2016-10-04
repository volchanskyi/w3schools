/**
 * Created by Administrator on 10/4/2016.
 */


var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}];
displayCars();
function displayCars() {
    document.getElementById("demo9").innerHTML =
        cars[0].type + " " + cars[0].year + "<br>" +
        cars[1].type + " " + cars[1].year + "<br>" +
        cars[2].type + " " + cars[2].year + "<br>";
}

function myArraySortObject() {
     cars.sort(function (a, b){return a.year - b.year});
        displayCars();
     }




function myArraySort() {
    fruits.sort();
    document.getElementById("demo8").innerHTML = fruits;
}


function myArrayReverse() {
    fruits.sort();
    fruits.reverse();
    document.getElementById("demo8").innerHTML = fruits;
}


function myArraySortRandom() {
    var points = [40, 200, 12, 384, 1.5, 0.3, -23];
    points.sort(function (a, b){return 0.5 - Math.random()});
    document.getElementById("demo8").innerHTML = points;
}

