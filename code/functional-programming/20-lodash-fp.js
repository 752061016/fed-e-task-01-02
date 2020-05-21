// lodash 中的 fp 模块
// 函数在前数据往后

const fp = require('lodash/fp')

const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))

console.log(f('NEVER SAY DIE')) // never-say-die