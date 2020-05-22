// Functor 函子

class Container {
    constructor (value) {
        // 维护一个值 永远不对外公布
        this._value = value
    }
    // 通过map方法传入的方法对value进行处理
    // 并返回一个新的函子对象并保存结果值
    map (fn) {
        return new Container(fn(this._value))
    }
}

// 创建一个函子对象，调用map方法，并返回一个新的函数对象
// 因为返回值也是函子对象，所以可以使用链式的方法继续调用
const result = new Container(5)
    .map(x => x + 1) // 6
    .map(x => x * x) // 36

console.log(result) // Container { _value: 36 }

// 创建静态方法来返回一个新的Container对象
class Container2 {
    constructor (value) {
        this._value = value
    }
    map (fn) {
        return Container.create(fn(this._value))
    }
    static create (value) {
        return new Container(value)
    }
}

const result2 = Container2.create(5)
    .map(x => x * x) // 25
    .map(x => x + 1) // 26

console.log(result2) // Container { _value: 26 }