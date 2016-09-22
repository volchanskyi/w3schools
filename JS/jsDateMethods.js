


/**
 * Created by Administrator on 9/22/2016.
 */

function myGetDate() {
var d = new Date();
    console.log(d);
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    console.log(days);
document.getElementById("demo5").innerHTML = days[d.getDay()];
}

function myComparingOfDates() {
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
document.getElementById("demo5").innerHTML = text;
}