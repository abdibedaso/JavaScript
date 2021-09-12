// DOM object properties
// tagName element’s HTML tag - could be “DIV”
mainDiv.tagName

// className CSS classes of element - could be “foo bar” 
mainDiv.className

// innerHTML Content in element - could be “\n <p>Hello…
mainDiv.innerHTML

// src URL target of an image - could be “greatwall.jpg”
icon.src

// DOM properties for form controls
// value - the text/value chosen by the user - output.value could be "1234567"
var output = document.getElementById("output");
output.value;

// checked - whether a box could be checked/unchecked
output.checked;

// disabled whether a control is disabled (boolean) - could be false/true
output.disabled;

// readOnly whether a text box is read-only sid. readOnly could be false/true
output.readOnly;

// DOM elements style property
// style lets you set any CSS style property for an element
function changeColor() {
    var clickMe = document.getElementById("clickme");
    clickMe.style.color = "red";
}

//Unobtrusive styling
function okayClick() {
    this.className = "highlighted";
    // where .highlighted { color: red; }
}

//Getting/Setting CSS classes
function highlightField() {
    // turn text yellow and make it bigger
    if (!document.getElementById("text").className) {
        document.getElementById("text").className = "highlight";
    } else if (document.getElementById("text").className.indexOf("invalid ") < 0) {
        document.getElementById("text").className += "highlight ";
    }
}