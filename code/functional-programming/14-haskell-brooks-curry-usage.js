// 柯里化案例

// 使用面向过程的方式提取字符串中的空格和数字
console.log('tom  tom'.match(/\s+/g))  // [ '  ' ] 
console.log('jerry 123'.match(/\d+/g)) // [ '123' ]

const _ = require('lodash')
const match = _.curry(function name(reg, str) {
    return str.match(reg)
})

const getSpace = match(/\s+/g)
console.log(getSpace('jerry tom')) // [ ' ' ]

const getNumber = match(/\d+/g)
console.log(getNumber('123 jerry')) // [ '123' ]

// 过滤数组中的字符串中符合对象的值
const filter = _.curry(function (fn, arr) {
    return arr.filter(fn)
})

console.log(filter(getSpace,['tom jerry','tom ','jerry'])) // [ 'tom jerry', 'tom ' ]

const findSpace = filter(getSpace)
console.log(findSpace(['tom jerry','tom','jerry'])) // [ 'tom jerry' ]
