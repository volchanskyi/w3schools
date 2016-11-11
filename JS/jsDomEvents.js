/**
 * Created by Administrator on 11/11/2016.
 */
function displayDateTime() {
    document.getElementById("demo19").innerHTML = Date();
}

function checkCoockies() {
        var text = "";
        if (navigator.cockieEnabled === true) {
            text = "Coockies are enabled";
        } else {
            text = "Coockies are not enabled";
        }
        document.getElementById("demo19").innerHTML = text;
    }
