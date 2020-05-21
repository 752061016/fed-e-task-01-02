// 可缓存

// lodash提供了一个带有缓存的记忆函数
const _ = require('lodash')

function getArea(r) {
    console.log(r)
    return Math.PI * r * r
}

let getAreaWithMemory = _.memoize(getArea)
console.log(getAreaWithMemory(4)) // 4 50.26
console.log(getAreaWithMemory(4)) // 50.26
console.log(getAreaWithMemory(4)) // 50.26
// 只打印了一次4，说明从第二次开始并没有执行getArea方法
// 只是在缓存中拿到这个值

// 模拟memoize内部实现
function memoize(fn) {
    let cache = {}
    return function () {
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || fn.apply(fn, arguments)
        return cache[key]
    }
}

let getAreaWithMemory2 = memoize(getArea)
console.log(getAreaWithMemory2(4)) // 4 50.26
console.log(getAreaWithMemory2(4)) // 50.26
console.log(getAreaWithMemory2(4)) // 50.26
