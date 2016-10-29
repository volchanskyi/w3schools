/**
 * Created by Ivan on 10/28/2016.
 */


//create an object with a method

function myMethodTest() {
var persona = {
    firstName: "Ivan",
    lastName: "Volchanskyi",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo15").innerHTML = persona.fullName();
}


//use built-in methods
function myBuiltInMethods() {
    var message = "Hello World!";
    var x = message.toUpperCase();
    document.getElementById("demo15").innerHTML = x;
}

//adding new methods
function myAddMethod() {
function island(land, green, age, ocean) {
    this.land = land;
    this.green = green;
    this.age = age;
    this.ocean = ocean;
    this.changeName = function (name) {
        this.land = name;
    };
}
    var tropicIsland = new island("BoraBora", "Greenest", 1300, "Atlantic");
    tropicIsland.changeName("Dominicana");
    document.getElementById("demo15").innerHTML =
        "I`d like to go to " + tropicIsland.land;
}