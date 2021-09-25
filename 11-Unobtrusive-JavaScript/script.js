function changeText() {
    let textbox = document.getElementById("output");
    textbox.value = "Hello, world!";
}

function unObtrusive() {

    document.getElementById('btn').onclick = changeText;
}

window.onload = unObtrusive;