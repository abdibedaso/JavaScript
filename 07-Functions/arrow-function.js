/* 
Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.
*/
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
    return n * n
}

console.log(square(2)) // 4

const square = n => {
    return n * n
}

console.log(square(2)) // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n // -> 4


const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]


const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

console.log(printFullName('Asabeneh', 'Yetayeh'))


// The above function has only the return statement, therefore, we can explicitly return it as follows.

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Asabeneh', 'Yetayeh'))