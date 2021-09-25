function delayedMultiply() {
    // 6 and 7 are passed to multiply when timer goes off
    //any parameters after the delay are eventually passed to the timer function
    setTimeout(multiply, 4000, 6, 7);
}

function multiply(a, b) {
    alert(a * b);
}

// What does it actually do if you have the () ?
// -- it calls the function immediately, rather than waiting the 2000ms!