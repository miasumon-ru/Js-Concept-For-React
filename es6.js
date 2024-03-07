// template string

const numbers = [ 89,35,98,12]

const student = {
    name : 'Shakib khan',
    age : 32,
    movies : ['king khan', 'Dhakar Mastan']
}

const about = ` My name is ${student.name} is age of ${student.age} has number of movies ${numbers[1]} also liked movie ${student.movies[0]}`

// console.log(about)

// arrow function

const getFiftyFive = () => 55

const result = getFiftyFive()

console.log(result)


// with one parameter

const addSixtyFive = num => num + 65;

console.log(addSixtyFive(10))

// with multiple parameter

const addThree = (x,y,z) => x + y + z
console.log(addThree(10,20,30))


// spread operator

// const newNumber = numbers;

// numbers.push(99)

// console.log(newNumber, numbers)

// by spread

// const newNumber = [...numbers]

// numbers.push(99)

// console.log(newNumber, numbers)


const currentNumbers = [...numbers, 55]

console.log(currentNumbers)

