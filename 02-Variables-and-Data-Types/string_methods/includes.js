// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
let string = 'JavaScript Web Application Programming'
console.log(string.includes('JavaScript')) // true
console.log(string.includes('code')) // false
console.log(string.includes('Web')) // true
console.log(string.includes('script')) // false
console.log(string.includes('java')) // false
console.log(string.includes('Application')) // true

let country = 'USA'
console.log(country.includes('usa')) // false
console.log(country.includes('USA')) // true
console.log(country.includes('sa')) // true
console.log(country.includes('uSA')) // false