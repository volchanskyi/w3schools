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

function myStringToLowerCase () {
    var text = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML = text.toLowerCase();
}


function myConcat() {
    var text1 = "HI";
    var text2 = "THERE";
    document.getElementById("demo4").innerHTML = text1.concat(" ", text2);
}

function myCharAtMethod() {
    var str = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML = str.charAt(0); 
}


function mySplit() {
    var str = document.getElementById("demo4").innerHTML;
    var arr = str.split(" ");
    document.getElementById("demo4").innerHTML = arr[0];
    console.log(arr);
}

function mySplit2() {
    var str = document.getElementById("demo4").innerHTML;
    var arr = str.split("");
    var text = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        text += arr[i] + "<br>"
    }
    document.getElementById("demo4").innerHTML = text;
}