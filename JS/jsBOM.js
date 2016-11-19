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

// Window History Back
// The history.back() method loads the previous URL in the history list.

function myHistoryBack() {
    window.history.back()
}

//History Forward

function myHistoryForward() {
    window.history.forward()
}


//The window.navigator object contains information about the visitor's browser.
//The cookieEnabled property returns true if cookies are enabled, otherwise false:
function myNavigatorCoockie() {
    document.getElementById("demo27").innerHTML = 
        "navigator.coockieEnabled is " + navigator.cookieEnabled;
}

//Browser Application Name

//The appName property returns the application name of the browser:

function myAppName() {
    document.getElementById("demo27").innerHTML = 
        "navigator.appName is " + navigator.appName;
}


function myAppCodeName() {
    document.getElementById("demo27").innerHTML = 
        "navigator.appCodeName is " + navigator.appCodeName;
}

//
// The Browser Engine
//
// The product property returns the product name of the browser engine:

function myNavProductName() {
    document.getElementById("demo27").innerHTML = 
        "navigator.product is " + navigator.product;
}

function myBrowserVer() {
    document.getElementById("demo27").innerHTML = 
        "Browser version is " + navigator.appVersion;
}

function myUserAgent() {
    document.getElementById("demo27").innerHTML =
        "user agent is " + navigator.userAgent;
}

function myBroPlatfLangStatus() {
    document.getElementById("demo27").innerHTML =
        "Operation System is  " + navigator.platform + " and the language is " + navigator.language + 
            " online status is " + navigator.onLine;
}


function myJavaCheck() {
    document.getElementById("demo27").innerHTML = 
        "Enabled Java is " + navigator.javaEnabled();
}

//Alert Box

function myAlertBox() {
    alert("I am\n an alert box");
}


//Confirm Box

function myConfirmBox() {
    var x;
    if (confirm("Press a button!") === true) {
        x = "You pressed OK!";
    } else {
        x = "You pressed Cancel!";
    }
    document.getElementById("demo28").innerHTML = x;
}


//Prompt Box

function myPromtBox() {
    var person = prompt("Please enter your name", "Harry Potter");
    
    if (person != null) {
        document.getElementById("demo28").innerHTML = 
            "Hello " + person + "! How are you today?";
    }
}