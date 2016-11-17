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

function myBOMScreenWidthAndHeight() {
    document.getElementById("demo25").innerHTML = 
        "Screen width is " + screen.width;
    document.getElementById("demo26").innerHTML =
        "Screen height is " + screen.height;
}


//Window Screen Available Width and Height

function myBOMScrAvailWidthAndHeight() {
    document.getElementById("demo25").innerHTML =
        "Available screen width is " + screen.availWidth;

    document.getElementById("demo26").innerHTML =
        "Available screen height is " + screen.availHeight;
}

// The screen.pixelDepth property returns the pixel depth of the screen.

function myBOMScrPixDepth() {
    document.getElementById("demo26").innerHTML =
        "Screen Pixel Depth: " + screen.pixelDepth;
}


//The window.location.href property returns the URL of the current page.

function myBOMLocation() {
    document.getElementById("demo26").innerHTML = 
        "Page location is: " + window.location.href;
}

//The window.location.hostname property returns the name of the internet host (of the current page).

function myBOMLocationHost() {
    document.getElementById("demo26").innerHTML = 
        "Page hostname is: " + window.location.hostname;
}


//The window.location.pathname property returns the pathname of the current page.

function myBOMLocationPath() {
    document.getElementById("demo26").innerHTML = 
        "Page pathname is: " + window.location.pathname;    
}

//The window.location.protocol property returns the web protocol of the page.

function myBOMLocationProtocol() {
    document.getElementById("demo26").innerHTML = 
        "Page protocol is: " + window.location.protocol;
}

//The window.location.assign() method loads a new document.

function myBOMLocationAssign() {
    window.location.assign("http://www.w3schools.com")
}