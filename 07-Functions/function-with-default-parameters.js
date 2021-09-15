/*
Sometimes we pass default values to parameters, 
when we invoke the function if we do not pass an argument the default value will be used. 
Both function declaration and arrow function can have a default value or values.
*/
// syntax
// Declaring a function
function functionName(param = value) {
    //codes
}

// Calling function
functionName()
functionName(arg)

//Example:

function greetings(name = 'Abdi') {
    let message = `${name}, welcome to JavaScript!`
    return message
}

console.log(greetings())
console.log(greetings('Abdi'))

function generateFullName(firstName = 'Abdi', lastName = 'Tufa') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}

console.log(generateFullName())
console.log(generateFullName('Segni', 'Tufa'))


function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
}

console.log('Age: ', calculateAge(1819))


function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon



//Let us see how we write the above functions with arrow functions
// syntax
// Declaring a function
const functionName = (param = value) => {
    //codes
}

// Calling function
functionName()
functionName(arg)



//Example:
const greetings = (name = 'Peter') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))



const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))





const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))



const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon