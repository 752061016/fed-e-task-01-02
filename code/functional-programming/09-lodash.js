// Lodash

// 引入lodash
const _ = require('lodash')

const arr = ['jreey', 'tom', 'kitty']

// first / last / toUpper / reverse / each / includes / find / findIndex

console.log(_.first(arr)) // jreey
console.log(_.last(arr))  // kitty
console.log(_.toUpper(_.first(arr))) // JREEY
console.log(_.reverse(arr))  // [ 'kitty', 'tom', 'jreey' ]
const resilt = _.each(arr, (item, index) => {
    console.log(item, index) // kitty 0 tom 1 jreey 2
})
console.log(resilt) // [ 'kitty', 'tom', 'jreey' ]



