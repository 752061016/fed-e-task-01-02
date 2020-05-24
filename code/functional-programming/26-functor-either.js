// Either 函子

// Left 记录函子中的错误信息
class Left {
    constructor (value) {
        this._value = value
    }
    static create (value) {
        return new Left(value)
    }
    map (fn) {
        return this
    }
}
// Right 使用回调对数据进行正确的处理
class Right {
    constructor (value) {
        this._value = value
    }
    static create (value) {
        return new Right(value)
    }
    map (fn) {
        return Right.create(fn(this._value))
    }
}

function parentJSON(str) {
    try {
        return Right.create(JSON.parse(str))
    }catch (e) {
        return Left.create({error : e.message})
    }
}

const result = parentJSON('{name: zxd}')
.map(x => x.name.toUpperCase()) // 因为Left保存的是错误结果所以不会执行函数直接返回
// 输出了Left 并保存的错误信息
console.log(result) // Left { _value: { error: 'Unexpected token n in JSON at position 1' } }

const result2 = parentJSON('{"name": "zxd"}')
    .map(x => x.name.toUpperCase())
// 输出了Rigt 并保存结果
console.log(result2) // Right { _value: 'ZXD' }