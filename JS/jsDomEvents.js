/**
 * Created by Administrator on 11/11/2016.
 */
function displayDateTime() {
    document.getElementById("demo19").innerHTML = Date();
}

function checkCoockies() {
        var text = "";
        if (navigator.cockieEnabled === true) {
            text = "Coockies are enabled";
        } else {
            text = "Coockies are not enabled";
        }
        document.getElementById("demo19").innerHTML = text;
    }

function myOnChange() {
    var x = document.getElementById("fn");
    x.value = x.value.toUpperCase();
}

function mOver(obj) {
obj.innerHTML = "Thank you";
}

function mOut(obj) {
    obj.innerHTML = "Mouse over me";
}

document.getElementById("myBtn2").addEventListener("click", displayDateTime);


document.getElementById("myBtn").addEventListener("click", function () { alert("Hello World!");
});

//a few event listeners on one element
    var xx = document.getElementById("myBtn3");
    xx.addEventListener("click", myFunction);
    xx.addEventListener("click", anotherFunction);
    
    function myFunction() {
        alert ("Hello World");
    }
    
    function anotherFunction() {
        alert ("This function was also executed");
    }

//many events

    var yy = document.getElementById("myBtn4");
yy.addEventListener("mouseover", myFunction2);
yy.addEventListener("click", myFunction3);
yy.addEventListener("mouseout", myFunction4);

function myFunction2() {
    document.getElementById("demo20").innerHTML += "Mouse over!<tr>";
}

function myFunction3() {
    document.getElementById("demo20").innerHTML += "Clicked!<tr>";
}

function myFunction4() {
    document.getElementById("demo20").innerHTML += "Mouse out!<tr>";
}


window.addEventListener("resize", function () {
    document.getElementById("demo20").innerHTML = Math.random();
});



//Passing Parameters examples
var p1 = 5;
var p2 = 7;

document.getElementById("myBtn5").addEventListener("click", function () {
    myFunction5(p1, p2);
})

function myFunction5(a, b) {
  var result = a * b;
    document.getElementById("demo20").innerHTML = result;
}

//remove event listener

document.getElementById("myDIV").addEventListener("mousemove", myFunction6);

function myFunction6(){
    document.getElementById("demo22").innerHTML = Math.random();
}

function removeHandler() {
    document.getElementById("myDIV").removeEventListener("mousemove", myFunction6);
}
