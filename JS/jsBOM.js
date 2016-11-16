/**
 * Created by Administrator on 11/15/2016.
 */


function myBOM() {
    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    
    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    
    var x = document.getElementById("demo25");
    x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";
}