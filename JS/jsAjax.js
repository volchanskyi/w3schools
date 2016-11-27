/**
 * Created by Ivan on 11/25/2016.
 */

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo31").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}



//To handle all browsers, including IE5 and IE6,
// check if the browser supports the XMLHttpRequest object.

function myLoadDoc2() {
    var xhttp;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
    } else {
        //code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo31").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}


//POST method example

function myLoadDoc3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo31").innerHTML = 
                this.responseText;
        }
    };
    xhttp.open("POST", "demo_post2.asp", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("fname=Henry&lname=Ford");
}

//CALLBACK

function myLoadDoc4(url, cFunction) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function myCallBackFunc(xhttp) {
    document.getElementById("demo31").innerHTML = 
        xhttp.responseText;
}

//XML DOM Response

function myXmlResponse() {
    var xhttp, xmlDoc, txt, x, i;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;
            txt = "";
            x = xmlDoc.getElementsByTagName("ARTIST");
            for (i = 0; i < x.length; i++) {
                txt = txt + x[i].childNodes[0].nodeValue + "<br>";
            }
            document.getElementById("demo31").innerHTML = txt;
        }
    };
    xhttp.open("GET", "cd_catalog.xml", true);
    xhttp.send();
}


//Fetch info from XML using AJAX

function myLoadXmlFetch() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFetchFunc(this);
        }
    };
    xhttp.open("GET", "cd_catalog.xml", true);
    xhttp.send();
}


function myFetchFunc(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
                x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
                "</td></tr>";
    }
    document.getElementById("demo33").innerHTML = table;
}


















