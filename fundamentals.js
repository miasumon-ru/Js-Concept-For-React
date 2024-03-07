/**
 * 1 > declaring variables with let , const 
 * 2 > 6 basic conditions
 * 3 > Array
 * 4 > Loop
 * 5 > Object
 * 6 > Function
 */

// 3 ways to access to property name 
/**
 * 1 > 
 */

const student = {
    name : 'Shakib khan',
    age : 32,
    movies : ['king khan', 'Dhakar Mastan']
}

 const name = student.name
const name2 = student['name']

const nameVariabe = 'name'
const name3 = student[nameVariabe]

console.log(name, name2, name3)