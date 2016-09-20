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


function mySlice() {
    var str = "Apple, Banana, Kiwi";
    var res = str.slice(7,13);
    document.getElementById("demo").innerHTML = res;

}


function myReverseSlice() {
    var str = "Apple, Banana, Kiwi";
    var res = str.slice(-12,-6);
    document.getElementById("demo").innerHTML = res;

}

function mySlice2() {
    var str = "Apple, Banana, Kiwi";
    var res = str.slice(6);
    document.getElementById("demo").innerHTML = res;

}


function mySubstr() {
    var str = "Apple, Banana, Kiwi";
    var res = str.substr(6, 6);
    document.getElementById("demo").innerHTML = res;

}


function myReplace() {
    var str = document.getElementById("demo2").innerHTML;
    var txt = str.replace("Microsoft","W3Schools");
    document.getElementById("demo2").innerHTML = txt;

}

function myGlobalReplace() {
    var str = document.getElementById("demo3").innerHTML;
    var txt = str.replace(/Microsoft/g, "W3Schools");
    document.getElementById("demo3").innerHTML = txt;
}


function myStingToUpperCase() {
    var text = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML = text.toUpperCase();
}