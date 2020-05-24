// folktale 中的 compose 、 curry

const {compose, curry} = require('folktale/core/lambda')
const {toUpper, first} = require('lodash/fp')

// 第一个参数为参数的个数
// 若传入的参数不满足这个个数则会返回一个新的函数
// 若传入的参数达到这个个数则执行回调
let f = curry(2, (x, y) => {
    return x + y
})

console.log(f(1, 2)) // 3
console.log(f(1)(2)) // 3

let c = compose(toUpper, first)
console.log(c(['hello','world'])) // HELLO
