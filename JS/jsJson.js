/**
 * Created by Administrator on 10/25/2016.
 */

function tryJson() {
    var text = '{ "employees" :[' +
        '{ "firstName":"John","lastName":"Doe" },' +
        '{ "firstName":"Anna","lastName":"Smith" },' +
        '{ "firstName":"Peter","lastName":"Jones" }]}';
    
    var obj = JSON.parse(text);
    document.getElementById("json").innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName;
}