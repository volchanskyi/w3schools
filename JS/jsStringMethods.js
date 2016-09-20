/**
 * Created by Administrator on 9/20/2016.
 */


function myIndexOf() {
    var str = "Please locate where 'locate' occurs!";
    var pos = str.indexOf("locate");
    document.getElementById("demo").innerHTML = pos;
}

function myLastIndexOf() {
    var str = "Please locate where 'locate' occurs!";
    var pos = str.lastIndexOf("locate");
    document.getElementById("demo").innerHTML = pos;
}



function mySearch() {
    var str = "Please locate where 'locate' occurs!";
    var pos = str.search("locate");
    document.getElementById("demo").innerHTML = pos;
}
