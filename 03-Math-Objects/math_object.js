// Math.PI
const PI = Math.PI
console.log(PI) // 3.141592653589793

// Math.round
console.log(Math.round(PI)) // 3; to round values to the nearest number
console.log(Math.round(9.81)) // 10

console.log(Math.floor(PI)) // 3; rounding down
console.log(Math.ceil(PI)) // 4; rounding up

// Math.min and Math.max
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

// Math.random()
const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)
    // Let create random number between 0 to 10
const num = Math.floor(Math.random() * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10)) //10