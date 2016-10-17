/**
 * Created by Administrator on 10/13/2016.
 */


function myRegExpSearch() {
    var str = document.getElementById("demo11").value;
    console.log(str);
    var n = str.search("a");
    console.log(n);
    document.getElementById("regExp").innerHTML = n;
}

function myReplaceRegExp() {
    var str = document.getElementById("demo11").value;
    var txt = str.replace("Microsoft", "Ivan`s company");
    document.getElementById("regExp").innerHTML = txt;
}

function myReplaceRegExp2() {
    var str = document.getElementById("demo11").value;
    var txt = str.replace(/Microsoft/g, "Ivan`s company");
    document.getElementById("regExp").innerHTML = txt;
}

function myRegExpPatterns() {
    var str = document.getElementById("demo11").value;
    var pattern = str.match(/[0-5]/g);
    var pattern2 = str.match(/[a-c]/g);
    document.getElementById("regExp").innerHTML = pattern + "<br>" + pattern2;
}

function myCheckRegExp() {
    txt = document.getElementById("demo11").value;
    document.getElementById("regExp").innerHTML = /Ivan/.test(txt);
}

function myExecMethodRegExp() {
    str = document.getElementById("demo11").value;
    document.getElementById("regExp").innerHTML = /something is wrong/.exec(str);
}
