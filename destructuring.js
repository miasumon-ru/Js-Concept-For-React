// array and object destructuring

// array

const numbers = [42,65]

const [x, y] = numbers;

console.log(x,y)

// with function

const boxify = (n1, n2) =>{

    const nums = [n1, n2]

    return nums;
}

const [first,second] = boxify(12,54);

console.log(first,second)

// object destructuring

const student = {
    name : 'Shakib khan',
    age : 32,
    movies : ['king khan', 'Dhakar Mastan']
}
const [seven , eight ] = student.movies

// console.log(seven,eight)

const {name, age } = student

console.log(name, age)


const employee = {
    ide : 'vs code',
    designation : 'developer',
    machine : 'mac',
    language : ['html', 'css','js'],
    specification : {
        height : 66,
        weight : 67,
        address : 'kumar khali',
        drink : 'water',
        watch : {
            color : 'black', price : 5000, brand : 'casio'
        }
    }
}

const {machine, ide } = employee;

const {weight,address} = employee.specification;

const {brand} = employee.specification.watch

console.log(machine, ide, weight, address, brand)