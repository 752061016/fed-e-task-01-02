// IO 函子

const fp = require('lodash')

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
}

const result = IO.create(process)
    .map(p => p.execPath) // 打印node的路径
console.log(result) // IO { _value: [Function] }
// 把不纯的操作延迟到执行时
console.log(result._value()) // D:\node\node.exe