// Point free

// 将需要的两个函数整合成一块

const fp = require('lodash/fp')

const f = fp.flowRight(fp.replace(/\s+/g,'_'), fp.toLower)

console.log(f('Hello World')) // hello_world