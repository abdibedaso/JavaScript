// Stores the data for only one session.
// -- The data is deleted when the user closes the specific browser tab.

// Count the number of times a user has clicked a button, in the current session
if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
} else {
    sessionStorage.clickcount = 1;
}

document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";