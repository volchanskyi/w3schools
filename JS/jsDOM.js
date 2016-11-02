/**
 * Created by Administrator on 11/1/2016.
 */


function myDOM() {
    var x = document.getElementsByTagName("p");
    console.log(x);
    document.getElementById("demo16").innerHTML = "The first paragraph is " + x[0].innerHTML;
}


function myDOM2() {
    var x = document.getElementById("demo");
    var y = x.getElementsByTagName("p");
    document.getElementById("demo16").innerHTML = 
        "The first paragraph inside 'demo' is : " + y[0].innerHTML;
}