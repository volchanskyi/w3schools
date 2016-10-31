/**
 * Created by Ivan on 10/30/2016.
 */
//Self-Invoking Functions (anonymous self-invoking function )

(function () {
    document.getElementById("demo16").innerHTML = "Hello! I called myself";
})();


//The arguments.length property returns the number of arguments received by the function:

function myFunc() {
function myArgRet(a, b) {
    return arguments.length;
}
document.getElementById("demo16").innerHTML = myArgRet(3, 2);
}


//find (for instance) the highest value in a list of numbers
function myFunc2() {
    function findMax() {
        var i, max = -Infinity;
        for (i = 0; i < arguments.length; i++) {
            if  (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    }
    document.getElementById("demo16").innerHTML = findMax(4, 5, 6);
}
//create a function to sum all input values
function myFunc3() {
    

function sumAll() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
document.getElementById("demo16").innerHTML =
    sumAll(1, 123, 500, 115, 44, 88);
}

//Invoking a Function with a Function Method (call() takes the function arguments separately)
function myFunc4() {
    var myObj;
    function myFunction(a, b) {
        return a * b;
    }
    myObj = myFunction.call(myObj, 10, 2); //will return 20
    document.getElementById("demo16").innerHTML = myObj;
}

//Invoking a Function with a Function Method for Arrays
function myFunc5() {
    var myObj, myArr;
    function myFunction(a, b) {
        return a * b;
    }
    myArr = [10, 2];
    myObj = myFunction.apply(myObj, myArr); //will return 20
    document.getElementById("demo16").innerHTML = myObj;
}

//Closure function
    var add = (function () {
        var counter = 0;
        return function () {return counter += 1;}
    })();
function myFunc6() {
    document.getElementById("demo16").innerHTML = add();
}