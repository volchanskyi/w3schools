/**
 * Created by Ivan on 11/13/2016.
 */

function myNodeVal() {
var myExampleText = document.getElementById("intro").childNodes[0].nodeValue;
document.getElementById("demo23").innerHTML = myExampleText;
}

//Creating New HTML Elements (Nodes)


function myCreateNodes() {
    var para = document.createElement("p");
    var node = document.createTextNode("This is new");
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
}


//Creating new HTML Elements - insertBefore()

function myCreateNodesBefore() {
    var para = document.createElement("p");
    var node = document.createTextNode("This is new");
    para.appendChild(node);

    var element = document.getElementById("div1");
    var child = document.getElementById("p1")
    element.insertBefore(para, child);
}

//Removing Existing HTML Elements
function myRemoveNode() {
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
}



//Replacing HTML Elements

function myReplaceNode() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    var para = document.createElement("p");
    var node = document.createTextNode("This is new");
    para.appendChild(node);
    parent.replaceChild(para, child);
}




















