// MayBe 函子
// 控制错误在允许范围

class MayBe {
    constructor (value) {
        this._value = value
    }
    static create (value) {
        return new MayBe(value)
    }
    map (fn) {
        return this.isNothing() ? MayBe.create(null) : MayBe.create(fn(this._value))
    }
    // 判断方法的值是否为空值，为空值时不调用函数
    isNothing () {
        return this._value === null || this._value === undefined
    }
}

const result = MayBe.create('Hello word')
    .map(x => x.toUpperCase())
console.log(result) // MayBe { _value: 'HELLO WORD' }

// 接收一个null，这该值不会进行map中的处理，直接返回null
const result2 = MayBe.create(null)
    .map(x => x.toUpperCase())
console.log(result2) // MayBe { _value: null }

// 缺点：若是多次使用map，其中有一次返回值为null
// 不容易判断该null是由哪个方法返回的
const result3 = MayBe.create('Hello word')
    .map(x => x.toUpperCase())
    .map(x => null)
    .map(x => x.split(''))
console.log(result3) // MayBe { _value: null }