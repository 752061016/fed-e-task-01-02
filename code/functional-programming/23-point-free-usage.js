// 把一个字符串的首字母提取并转换成大写用.分隔
// worle wild web ==> W.W.W

const fp = require('lodash/fp')
// 分割字符串 => 转换大写 => 提取第一个字母 => 拼接成字符串  fp.map 遍历了两次  能将两步在同一步骤一起完成
const firstLetterToUpper1 = fp.flowRight(fp.join('.'), fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '))

console.log(firstLetterToUpper1('worle wild web')) // W.W.W
// 分割字符串 => 转换大写并提取第一个字母 => 拼接成字符串  fp.map 遍历了一次
const firstLetterToUpper2 = fp.flowRight(fp.join('.'), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '))

console.log(firstLetterToUpper2('worle wild web')) // W.W.W