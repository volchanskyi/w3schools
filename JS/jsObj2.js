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

//Alternative calculator
'use strict';
var  calculator = {
    read: function () {
        this.a = +prompt("Put first value", 0);
        this.b = +prompt("Put second value", 0);
    },

    sum: function () {
        return this.a + this.b;
    },

    mul: function () {
        return this.a * this.b;
    }
};

function callCalc() {
    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
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
    var htmlIns = document.getElementById("trySplice");

    if (ask === "delete") {
        delSplice(arr);
        htmlIns.innerHTML = arr.join(" ");
    } else if (ask === "insert") {
        insertSplice(arr);
        htmlIns.innerHTML = arr.join(" ");
    } else if (ask === "replace") {
        replaceSplice(arr);
        htmlIns.innerHTML = arr.join(" ");
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

//--------------------


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


    if ( isNaN( parseInt(ask) ) === false ) {
        alert("Numbers can`t be capitalized!");
    } else if ( ask === null || ask === "" ) {
        alert("You canceled or didn`t put a value");
    } else if (ask.indexOf("-") !== -1) {
        alert( camelize(ask) );
        } else {
            alert("Can`t recognize the value: " + ask + "Try again, and don`t forget to use a hyphen");
    }
}

// random sort

function useSortAlg(a, b) {
    return Math.random() - 0.5;
}


function sortThat() {
    var arr = [];

    for (var i = 0; arr.length < 5; i++) {
        arr[i] = prompt("Put some elements and we sort them randomly", "bla bla");
    }

    arr.sort(useSortAlg);

    alert(arr);
}


//MAP examples

function getWords() {

    var prmt = prompt("Please write a sentance and we count amount of letters in the words", "write something");

    alert("You put " + prmt);
    
    alert( "The length of the words is " + mapArray(prmt) );
    

}

function mapArray(str) {

    str = str || "you canceled";

    if (str === undefined) str = "wrong value";

    var arr = str.split(" ");

    var newArr = arr.map(function (item) {
        return item.length;
    });
    
    return newArr;
}
 
"use strict";
//return sum of arguments

function getArgs() {
    
    alert('Put three numbers and you`ll get the sum');
    
    var first = prompt("Put first number", "");
    var second = prompt("Put second number", "");
    var third = prompt("Put third number", "");

    if ( isNaN( parseInt(first) ) === true || isNaN( parseInt(second) ) === true || isNaN( parseInt(third) ) === true) {
        alert("The value is wrong. Please put numbers only");
        return;
    }

    alert( sumArgs(+first, +second, +third) );
}



function sumArgs() {

    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    
    return result;
}

//counter with using an object

function makeCounter() {
    var currentCount = 1;

    function counter() {
        return currentCount++;
    }

        counter.set = function (value) {
            currentCount = value;
        };
        
        counter.reset = function () {
            currentCount = 1;
        };
    return counter;

}

function callCounter() {
    var counter = makeCounter();
    
    alert( counter() );
    alert( counter() );
    
    counter.set(5);
    alert( counter() );
}

//string buffer

function makeBuffer() {

    var currentBuffer = "";

    function buffer(piece) {
        if (arguments.length == 0) {
            return currentBuffer;
        }
      currentBuffer += piece;
    }

    buffer.clear = function () {
        currentBuffer = "";
    };

    return buffer;

}

function doBuffer() {
    var buffer = makeBuffer();

    buffer("Test");
    buffer(" doesn`t eat itself");
    alert( buffer() );

    buffer.clear();

    alert( buffer() );
}


//sort names by fields
function byField(field) {
   return function (a, b) {
       return a[field] > b[field] ? 1 : -1;
   }
}

function sortName() {

    // var name = document.getElementById("getObj").value;
    // var surname = document.getElementById("getObj").value;
    // var age = document.getElementById("getObj").value;

    
    var users = [{
        name: document.getElementById('getObjName').value,
        surname: document.getElementById("getObjSurname").value,
        age: +document.getElementById("getObjAge").value
    }, {
        name: "Sam",
        surname: 'Mendes',
        age: 25
    }, {
        name: "Maria",
        surname: 'Galvanize',
        age: 18
    }];


    users.sort(byField("name"));
    users.forEach(function(user) {
        alert(user.name);
    });

    users.sort(byField("age"));
    users.forEach(function(user) {
        alert(user.age);
    });

}

//Module style

(function () {

    // Global var
    var message = "Hey!";

    //func for calling the var
    function showVar() {
        alert(message);
    }

    //calling the message(function)
    showVar();


})();

//Chaining method
function callLadder() {
    var ladder = {
        step: 0,
        up: function() {
            this.step++;
            return this;
        },
        down: function() {
            this.step--;
            return this;
        },
        showStep: function() {
            alert( this.step );
            return this;
        }
    };
    
ladder.up().up().down().up().down().showStep();

}

//Constructors (constructors use capital first letter)

function User(firstName, lastName) {
    var hi = "My name is ";
    this.firstName = firstName;
    this.lastName = lastName;

    this.sayHi = function () {
        alert( hi + this.firstName + " " + this.lastName);
    };
}

function getName() {
    var user = new User( document.getElementById("demo35").value, document.getElementById("demo36").value );
    user.sayHi();
}

//Accumulator (constructor) calls automatically

// function Accumulator(startingValue) {
//     this.value = startingValue;
//
//     this.read = function() {
//         this.value += +prompt("How many?", "");
//     };
//
// }
//
//     var accumulator = new Accumulator(1);
//     accumulator.read();
//     accumulator.read();
//     alert( accumulator.value );

function tryObj() {

var user = {
    lastName: "Volchanskyi"
};

Object.defineProperty(user, "name", {
    value: "Ivan",
    writable: false,
    configurable: false
});

user.name = "John";
    return user.name;
}

function tryObj2() {
    var usr = {
        firstName: "Ivan",
        lastName: "Volchanskyi"
    };
    
    Object.defineProperty(usr, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        
        set: function (value) {
            var split = value.split(' ');
            this.firstName = split[0];
            this.lastName = split[1];
        }
    });
    
    alert(usr.fullName);
    
    usr.fullName = "Sergey Udakov";
    alert(usr.firstName);
    alert(usr.lastName);

}

function tryObj3() {
    var user = {
        // firstName: "Nobody",
        // lastName: "No one",
    
        get fullName() {
            return this.firstName + " " + this.lastName;
        },
        
        set fullName(value) {
            var split = value.split(' ');
            this.firstName = split[0];
            this.lastName = split[1];
        }
    };
    
    alert(user.fullName);
    
    user.fullName = "Ivan Volchanskyi";
    alert(user.firstName);
    alert(user.lastName);
}



function Usr(name, birthday) {
    this.name = name;
        this.birthday = birthday;
    
    Object.defineProperty(this, "age", {
        get: function () {
            var todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

function tryObj4() {
var pete = new Usr("Pete", new Date(1986, 11, 5));
    
    alert( pete.birthday);
    alert( pete.age );
}


function tryNewObj() {
    var user = {};
    
    Object.defineProperties(user, {
        firstName: {
            value: "Pete"
        },
        
        lastName: {
            value: "Peterson"
        },
        
        fullName: {
            get: function () {
                return this.firstName + " " + this.lastName; 
            }
        }
    });
    alert( user.fullName );
}


function trySecObj() {
    var obj = {
        a: 1,
        b: 2,
        internal: 3
    };
    
    Object.defineProperty(obj, "internal", {
        enumerable: false
    });
    
    alert( Object.keys(obj) );
    alert( Object.getOwnPropertyNames(obj) );
}


function User2(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {

        firstName: {

            get: function () {
                return this.fullName.split(" ")[0];
            },
       
        set: function (newFirstName) {
            this.fullName =  newFirstName + " " + this.lastName;
            }
        },

        lastName: {
            get: function () {
                return this.fullName.split(" ")[1];
            },
            
            set: function (newLastName) {
                this.fullName = this.firstName + " " + newLastName;
            }
        }

    });

}

function tryExamp() {
    var vasya = new User2("Vas Anchishkin");
    console.log(vasya.fullName);
    console.log(vasya.firstName);
    console.log(vasya.lastName);
    vasya.lastName = "Grigorov";
    console.log(vasya.fullName);
}



