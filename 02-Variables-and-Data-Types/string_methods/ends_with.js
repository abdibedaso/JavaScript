// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)
let string = 'Love is the best to in this world'
console.log(string.endsWith('world')) // true
console.log(string.endsWith('love')) // false
console.log(string.endsWith('in this world')) // true

let country = 'USA'
console.log(country.endsWith('A')) // true
console.log(country.endsWith('AS')) // false
console.log(country.endsWith('uSA')) //  false