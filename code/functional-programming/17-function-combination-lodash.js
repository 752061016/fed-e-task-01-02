// // Lodash中的组合函数

const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = str => str.toUpperCase()

const f = _.flowRight(toUpper, first, reverse)

console.log(f(['tom', 'jerry', 'lucy'])) // LUCY

// // 模拟组合函数
function compose(...args) {
    return function (value) {
        // 反转数组并value作为参数输入到函数中
        return args.reverse().reduce(function (acc, fn) {
            return fn(acc)
        }, value)
    }
}

// 箭头函数写法
const compose2 = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc),value)

const f2 = compose2(toUpper, first, reverse)

console.log(f2(['tom', 'jerry', 'lucy'])) // LUCY
