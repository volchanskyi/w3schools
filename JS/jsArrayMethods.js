/**
 * Created by Administrator on 9/28/2016.
 */

function myArrayToString() {
    var fruits  = ["Raspberry", "Cantaloupe", "Dates", "Peaches"];
    document.getElementById("demo6").innerHTML = fruits.toString();    
}


function myArrayJoin() {
    var fruits  = ["Raspberry", "Cantaloupe", "Dates", "Peaches"];
    document.getElementById("demo6").innerHTML = fruits.join(" : ");
}

function myArrayPop() {
    var x = fruits.pop();
    document.getElementById("demo6").innerHTML = fruits;
    document.getElementById("demo7").innerHTML = x;
}


function myArrayPush() {
    var x = fruits.push("Kiwi");
    document.getElementById("demo6").innerHTML = fruits;
    document.getElementById("demo7").innerHTML = x;
}

function myArrayShift() {
    var x = fruits.shift();
    document.getElementById("demo6").innerHTML = fruits;
    document.getElementById("demo7").innerHTML = x;
}

function myArrayDelete() {
    delete fruits[0];
    document.getElementById("demo6").innerHTML = fruits[0] + " " + "(I deleted element 0 from the massive)";
}

function myArraySplice() {
    fruits.splice(2, 0, "lemon", "Strawberry");
    document.getElementById("demo6").innerHTML = fruits;
}

function myArrayJoining() {
    var myGirls = ["Stacy", "Sandra", "Rachel"];
    var myBoys = ["Ivan", "Brien", "Steve"];
    var myBand = myBoys.concat(myGirls);
    document.getElementById("demo6").innerHTML = myBoys;
    document.getElementById("demo7").innerHTML = myGirls;
    document.getElementById("demo8").innerHTML = myBand;
}

function myArraySlice() {

    var mango = fruits.slice(3);
    document.getElementById("demo8").innerHTML = mango;
    
}