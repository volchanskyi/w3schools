/**
 * Created by Administrator on 9/20/2016.
 */
function myNAN() {
    document.getElementById("demo4").innerHTML = 100 / "Apple";    
}

function myNAN2() {
    var x = 100 / "Apple";
    document.getElementById("demo4").innerHTML = isNaN(x);
} 