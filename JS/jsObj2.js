/**
 * Created by Ivan on 10/26/2016.
 */

//constructor
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
function myRootsCreate() {
    var myFather = new Person("Sergey", "Volchanskyi", 53, "grey");
    var myGrandFather = new Person("Ivan", "Volchanskyi", 78, "blue");
    document.getElementById("demo15").innerHTML =
        "My father is " + myFather.age + ". My grand father is " + myGrandFather.age;
}


//mutable object

function myMutObj() {
    var person = {firstName:"Ivan", lastName:"Volchanskyi", age:30, eyeColor:"grey"};
    var x = person;
    x.age = 25;
    document.getElementById("demo15").innerHTML = 
        person.firstName + " is " + person.age + " years old.";
}


function myForLoopObj() {
    var txt = "";
    var person = {fname: "Ivan", lname: "Volchanskyi", age: 30};
    var x;
    for(x in person) {
        txt += person[x] + " ";
    }
    document.getElementById("demo15").innerHTML = txt;
    
    
}

function myDelPersObj() {
    var person = {fname: "Ivan", lname: "Volchanskyi", age: 30};
    delete person.age;
    document.getElementById("demo15").innerHTML = person.fname + " is " + person.age + " years old";
}

// find the last element

function getLastItem() {
    var goods = ["blue cheese", "apple", "popcorn"];
    
    alert( "last item is: " + goods[goods.length - 1] );
    
    var add = prompt("Would you like to add a new element to the massive", "");

    if (add !== null || add !== undefined) {
    goods.push(add);
        alert("The new last item is: " + goods[goods.length - 1] );
    } else {
        alert("The last item is still: " + goods[goods.length - 1] );
    }

}

//play with massive

function addItems() {
    var styles = ["Jazz", "Blues"];
    styles.push("R`n`R");
    styles[styles.length - 2] = "Classic";
    alert( styles.shift() );
    styles.unshift("Rap", "Raggy");
    
}

//get random item

function getRandomItem() {
    var arr = ["Apple", "Banana", "Lemon", "Melon"];
    var rand = Math.floor(Math.random() * arr.length);
    
    alert(arr[rand]);
    
}

//calculator :)

function runCalc() {
    var numbers = [];

    while(true) {
        var value = prompt("Enter number", 0);

        if (value === "" || value === null || isNaN(value)) break;

        numbers.push(+value);
    }
    
    var sum = 0;
    
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    alert(sum);
}

//find item in massive
function findHero(array, value) {
    if (array.indexOf) { // if the method exists
        return array.indexOf(value);
    }
    //else
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }

    return -1;
}

function addHeroes() {
    var arr = ["Bond", "Batman", "Yeti"];
    var who = prompt("Please enter: " + arr.join(", "), "Bond");

    findHero(arr, who);
}


//filter array

function filterRange(arr, a, b) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }

    return result;
}

function initArray() {
    var arr = [];
    
    for (var i = 0; arr.length < 5; i++) {
        var num = prompt("Please put five numbers", "");

        if (num === null || num === "" || isNaN(num)) {
            alert("Please enter a number");
            num += 0;
        } else {

            arr.push(+num);

        }
    }

    var filtered = filterRange(arr, 3, 5);
    
    alert( "We found the next numbers in the array: " + filtered );
    
}


// sort elements

function sortNumAlgorithm(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

function sortNumData() {
    var numbers = [];
    alert("We`ll ask you FIVE times to enter a number");

    for (var i = 0; numbers.length < 5; i++) {
        var num = prompt("Please put a number", "");

        if (num === null || num === "" || isNaN(num) || isNaN(parseInt(num)) || num === "0") {
            alert("Please enter a number. Avoid letters, empty spaces and do not click on cancel");
            // num += 0;
            numbers = new Array(0);
        } else {

            numbers.push(+num);

        }
    }

    numbers.sort(sortNumAlgorithm);

    alert("We sort your numbers: " + numbers);
}


//using .splice method

function showSplice() {
    var sentance = ( document.getElementById("trySplice").innerHTML = "That bike is too fast" );
    var arr = sentance.split(" ");
    var ask = prompt("What do you want with the sentance? \n'delete' first few words \n'insert' some words \n'replace' first words", "delete");

    if (ask === "delete") {
        delSplice(arr);
        document.getElementById("trySplice").innerHTML = arr.join(" ");
    } else if (ask === "insert") {
        insertSplice(arr);
        document.getElementById("trySplice").innerHTML = arr.join(" ");
    } else if (ask === "replace") {
        replaceSplice(arr);
        document.getElementById("trySplice").innerHTML = arr.join(" ");
    } else if ( ask === null || ask === "") {
        alert("You canceled or didn`t put a value");
    } else {
        alert("Can`t recognize the value: " + ask + "Try again");
    }
}




function delSplice(param) {
    var conf = confirm("Are you sure you want to delete first two words?");

    if (conf === true) {
        param.splice(0, 2);
        return param;
    } else {
        alert("You Canceled");
    }


}


function insertSplice(param) {
    var conf = confirm("Are you sure you want to insert some words?");

    if (conf === true) {
        var fWord = prompt("Please put first word", "");
        var sWord = prompt("Please put second word", "");

        param.splice(0, 0, fWord, sWord);
        return param;
    } else {
        alert("You Canceled");
    }
}

function replaceSplice(param) {
    var conf = confirm("Are you sure you want to insert some words?");

    if (conf === true) {
        var fWord = prompt("Please put first word", "");
        var sWord = prompt("Please put second word", "");

        param.splice(0, 2, fWord, sWord);
        return param;
    } else {
        alert("You Canceled");
    }
    
}


//camelize any dashed word

function camelize(str) {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');

}


function getDashWord() {
    var ask = prompt("Put a word that contains a dash ", "list-style-image");


    if ( Number(ask[0]) === true || Number(ask.length -1) === true) {
        alert("Numbers can`t be capitalized!");
    } else if ( ask === null || ask === "" ) {
        alert("You canceled or didn`t put a value");
    } else if (ask.indexOf("-") !== -1) {
        alert( camelize(ask) );
        } else {
            alert("Can`t recognize the value: " + ask + "Try again, and don`t forget to use a hyphen");
    }
}












