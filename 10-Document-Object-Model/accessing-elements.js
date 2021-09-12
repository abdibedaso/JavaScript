// Change the text in most form controls by setting the value property
// -- Browser automatically updates the screen when any DOM object is changed

function changeText() {
    const textbox = document.getElementById("output");
    textbox.value = "Hello, world!";
}

// Swap Text
function swapText() {
    var span = document.getElementById("output2");
    var textBox = document.getElementById("textbox2");
    var temp = span.innerHTML;
    span.innerHTML = textBox.value;
    textBox.value = temp;
}