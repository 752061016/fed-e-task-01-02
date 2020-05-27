const fp = require('lodash/fp')

const cars = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
]
// 1
let getInStock = fp.prop('in_stock')
let isLastInStock = fp.flowRight(getInStock,fp.last)
console.log(isLastInStock(cars)) // false

// 2
let getName = fp.prop('name')
let getFirstName = fp.flowRight(getName,fp.first)
console.log(getFirstName(cars)) // Ferrari FF

// 3
let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length
}
// let averageDollarValue = function (cars) {
//     let dollar_value = fp.map(function (cars) {
//         return cars.dollar_value
//     }, cars)
//     return _average(dollar_value)
// }
let getDollarValue = fp.prop('dollar_value')
let averageDollarValue = fp.flowRight(_average, fp.map(getDollarValue))
console.log(averageDollarValue(cars)) // 790700

// 4
let _underscore = fp.replace(/\W+/g, '_')
let sanitizeNames = fp.map(fp.flowRight(fp.toLower,_underscore,getName))
console.log(sanitizeNames(cars)) // ['ferrari_ff','spyker_c12_zagato','jaguar_xkr_s','audi_r8','aston_martin_one_77','pagani_huayra']

