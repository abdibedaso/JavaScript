// Functions can be return values
function getAlert(str) {
    return function() { alert(str); }
}
var whatsUpAlert = getAlert("What's up!");
whatsUpAlert(); // “What’s up!”