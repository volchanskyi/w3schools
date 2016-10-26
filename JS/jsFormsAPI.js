/**
 * Created by Ivan on 10/25/2016.
 */


function myCheckFormsAPI() {
    var inpObj = document.getElementById("numb2");
    if (inpObj.checkValidity() === false) {
        document.getElementById("demo14").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo14").innerHTML = "Input OK";
    }
}

