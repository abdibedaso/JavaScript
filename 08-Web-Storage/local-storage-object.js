// The localStorage object stores the data with no expiration date. 
// -- The data will not be deleted when the browser is closed, and will be available the next day, week, or year

// Store
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// Store
localStorage.lastname = "Smith";
// Retrieve
document.getElementById("result").innerHTML = localStorage.lastname;

// Remove
localStorage.removeItem("lastname");