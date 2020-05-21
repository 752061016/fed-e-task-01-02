// lodash 和 lodash/fp 模块中 map 方法的区别

// lodash  数据优先  函数之后
const _ = require('lodash')
console.log(_.map(['23', '5', '31'], parseInt)) // [ 23, NaN, NaN ]
// parseInt('23', 0, array) parseInt 第二个参数为转换成几进制 0 默认为十进制
// parseInt('5', 1, array)  
// parseInt('31', 2, array) 

// lodash fp
const fp = require('lodash/fp')
// 处理的参数不同，只处理当前的值
console.log(fp.map(parseInt, ['23', '5', '31'])) // [ 23, 5, 31 ]