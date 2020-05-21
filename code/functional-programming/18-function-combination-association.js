// 函数组合需要满足结合律

const _ = require('lodash')

const f1 = _.flowRight(_.toUpper, _.first, _.reverse)

const f2 = _.flowRight(_.flowRight(_.toUpper, _.first), _.reverse)

const f3 = _.flowRight(_.toUpper, _.flowRight(_.first, _.reverse))

console.log(f1(['one', 'two', 'three'])) // THREE
console.log(f2(['one', 'two', 'three'])) // THREE
console.log(f3(['one', 'two', 'three'])) // THREE
