const student = {
    name : 'Shakib khan',
    age : 32,
    movies : ['king khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);

const studentObject = JSON.parse(studentJSON)

// console.log(studentJSON,studentObject)

// Object keys and values > returns the result in an array

const keys = Object.keys(student);
const values = Object.values(student);

console.log(keys,values)

// forEach, map
const numbers = [ 89,35,98,12]

numbers.forEach(num => console.log(num))


// for .. in > for looping object

// add or remove from an array

const newProduct = {
    name : 'webcam', price : 700, brand : 'lal '
}

const products = [
    {name: 'laptop', price : 32000, brand : 'lenovo', color : 'silver'},
    {name: 'phone', price : 7000, brand : 'iphone', color : 'golden'},
    {name: 'watch', price : 3000, brand : 'casio', color : 'yellow'},
    {name: 'sunglass', price : 300, brand : 'raybon', color : 'black'},
    {name: 'camera', price : 9000, brand : 'canon', color : 'gray'}
]

// add by copying > spread operator
const newProducts = [...products, newProduct]

// console.log(newProducts)


// remove by filtering

const specificItem = newProducts.filter(product => product.name !== 'phone')

// console.log(specificItem)

// shortcut by ternary operator

const money = 80

const food = money > 100 ? 'biryani' : 'cha biscuit kha'

console.log(food)

// in case of multiple condition

const myVar = 100

const drink = (money> 100 && myVar === 100) ? 'coke ' : 'filter water'

console.log(drink)

// function shortcut 

const isActive = false

const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user')

isActive ? showUser() : hideUser()

// toggle boolean

let isActive2 = true;

isActive = !isActive2