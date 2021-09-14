// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1

// Check an element if it exist in an array. - Check items in a list
// let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana') // 0

if (index != -1) {
    console.log('This fruit does exist in the array')
} else {
    console.log('This fruit does not exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index != -1 ? console.log('This fruit does exist in the array') : console.log('This fruit does not exist in the array')

// let us check if a avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado') // -1, if the element not found index is -1
if (indexOfAvocado != -1) {
    console.log('This fruit does exist in the array')
} else {
    console.log('This fruit does not exist in the array')
}
// This fruit does not exist in the array