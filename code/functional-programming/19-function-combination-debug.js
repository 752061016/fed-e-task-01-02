// 函数组合 调试

const _ = require('lodash')

const split = _.curry((sep, str) => _.split(str, sep))

const join = _.curry((sep, arr) => _.join(arr, sep))

const f = _.flowRight(join('-'), _.toLower, split(' '))
console.log(f('Never Say Die')) // n-e-v-e-r-,-s-a-y-,-d-i-e

const trace = _.curry((target, val) => {
    console.log(target, val)
    return val
})
const f2 = _.flowRight(join('-'), trace('toLowen 输出值：'), _.toLower,trace('split 输出值：'), split(' '))
// split 输出值： [ 'Never', 'Say', 'Die' ]
// toLowen 输出值： never,say,die
// 根据打印结果显示：因为toLower结果为字符串，join需要的是数组，所以与预期返回值不同
console.log(f2('Never Say Die')) 

const map = _.curry((fn, arr) => _.map(arr, fn))
const f3 = _.flowRight(join('-'), map(_.toLower), split(' '))
console.log(f3('Never Say Die')) // never-say-die