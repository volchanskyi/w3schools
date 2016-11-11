/**
 * Created by Administrator on 11/11/2016.
 */

function myMove() {
var id = setInterval(frame, 5);
var pos = 0;
var elem = document.getElementById("animate");
function frame() {
    if (pos === 350) {
        clearInterval(id);
    } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
  }
}