/**
 * Created by Administrator on 9/15/2016.
 */

var car = {type:"Fiat", model:"500", color:"white"};
console.log(car);

var buddy = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

var fullName = buddy.fullName();

console.log(fullName);

document.getElementById("demo").innerHTML = fullName;

