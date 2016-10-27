/**
 * Created by Ivan on 10/26/2016.
 */

//constructor
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
function myRootsCreate() {
    var myFather = new person("Sergey", "Volchanskyi", 53, "grey");
    var myGrandFather = new person("Ivan", "Volchanskyi", 78, "blue");
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



