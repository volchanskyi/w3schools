/**
 * Created by Ivan on 10/29/2016.
 */


//Adding a Property to an Object

function myProto() {
function Person(first, last, age, eye) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.eye = eye;
}
    var myFather = new Person("Sergey", "Volchanskyi", 54, "grey");
    var myGrandFather = new Person("Ivan", "Volchanskyi", 78, "blue");
    myFather.nationality = "Russian";
    document.getElementById("demo15").innerHTML =
        "My father is " + myFather.nationality;
    
}


//Adding a Method to an Object


function myProto2() {
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }

    var myFather = new Person("Sergey", "Volchanskyi", 50, "blue");

    myFather.name = function() {
        return this.firstName + " " + this.lastName;
    };

    document.getElementById("demo15").innerHTML =
        "My father is " + myFather.name();
}

//Adding Properties to a Prototype
function myProto3() {
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Ukrainian";
}
    var myFather = new Person("Sergey", "Volchanskyi", 54, "grey");
    var myGrandFather = new Person("Ivan", "Volchanskyi", 78, "blue");
    document.getElementById("demo15").innerHTML = 
        "My father is " + myFather.nationality + " and my Grand Father is " + myGrandFather.nationality;
}

//Adding Methods to a Prototype

function myProto4() {


    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
        this.name = function() {
            return this.firstName + " " + this.lastName
        };
    }
    var myFather = new Person("Sergey", "Volchanskyi", 54, "grey");
    var myGrandFather = new Person("Ivan", "Volchanskyi", 78, "blue");
    document.getElementById("demo15").innerHTML =
        "My father is " + myFather.name();
    
}


//Using the prototype Property
function myProto5() {

}
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.nationality = "Russian";
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;

    var myFather = new Person("Sergey", "Volchanskyi", 54, "grey");
    var myGrandFather = new Person("Ivan", "Volchanskyi", 78, "blue");
document.getElementById("demo15").innerHTML =
    "My father is " + myFather.nationality + " and his name is " + myFather.name();
}