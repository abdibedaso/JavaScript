// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.splice()) // -> remove all items


const numbers = [1, 2, 3, 4, 5]
console.log(numbers.splice(0, 1)) // remove the first item


const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items