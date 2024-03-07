// map, forEach, filter and find

const products = [
    {name: 'laptop', price : 32000, brand : 'lenovo', color : 'silver'},
    {name: 'phone', price : 7000, brand : 'iphone', color : 'golden'},
    {name: 'watch', price : 3000, brand : 'casio', color : 'yellow'},
    {name: 'sunglass', price : 300, brand : 'raybon', color : 'black'},
    {name: 'camera', price : 9000, brand : 'canon', color : 'gray'}
]

// map > returns an array

const brands = products.map((product)=> product.brand)
const price = products.map((product)=> product.price)

// console.log(brands,price)


// forEach > does not return an array 
// we will use forEach for the most time from now when there is necessary to loop through of an array

// products.forEach((product) => console.log(product))

// filter > do the work on the basis of condition and returns an array

const cheap = products.filter(product => product.price < 5000)
const specialName  = products.filter(product => product.name.includes('n') )

// console.log(cheap,specialName)

// find > do the same the work as filter does except all returns > it only shows the first result 

const special = products.find((product) => product.name.includes('n'))

console.log(special)

