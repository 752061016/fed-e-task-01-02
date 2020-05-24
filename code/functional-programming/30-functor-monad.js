// IO函子的问题

const fp = require('lodash/fp')
const fs = require('fs')

class IO {
    constructor (fn) {
        this._value = fn
    }
    static create (value) {
        return new IO (function () {
            return value
        })
    }

    map (fn) {
        // 把两个函数组合起来作为新IO函数的值
        return new IO(fp.flowRight(fn, this._value))
    }
    join () {
        return this._value()
    }
    flatMap (fn) {
        return this.map(fn).join()
    }
}

let readFile = function (filename) {
    return new IO (function () {
        return fs.readFileSync(filename, 'utf-8')
    })
}

let print = function (x) {
    return new IO (function () {
        console.log(x)
        return x
    })
}

// let cat = fp.flowRight(print, readFile)
// // r 的结构为 IO(IO(x)) 
// // ._value()执行外层的回调print中返回的IO里的函数
// // 再._value()执行内层的回调readFile中返回的IO里的函数
// // 缺点：若有多层嵌套需要多次使用._value方法进行回调
// let r = cat('../../package.json')._value()._value()
// console.log(r) // ...package.json

// 读取文件操作：返回一个IO，将读取操作存入_value中，不会马上执行
let r = readFile('../../package.json')
    // .map(x => x.toUpperCase())
    // 将读取文件操作_value方法及fp.toUpper方法合并新的方法并存入新的IO中
    .map(fp.toUpper)
    // 将新方法及print方法合并新的方法并存入新的IO中并执行,由print返回一个新的IO
    .flatMap(print)
    // 执行print返回的新的IO的函数方法
    .join()

console.log(r) // ...package.json