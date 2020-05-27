class Container {
    static of (value) {
        return new Container(value)
    }
    constructor (value) {
        this._value = value
    }
    map (fn) {
        return Container.of(fn(this._value))
    }
}

class Maybe {
    static of (x) {
        return new Maybe(x)
    }
    isNothing () {
        return this._value === null || this._value === undefined
    }
    constructor (x) {
        this._value = x
    }
    map (fn) {
        return this.isNothing() ? this : Maybe.of(fn(this._value))
    }
}

const fp = require('lodash/fp')
// 1
let ex1 = num => v => v.map(fp.map(fp.add(num)))
let maybe = Maybe.of([5,6,1])
let ex1_5 = ex1(5)
console.log(ex1_5(maybe)) // Maybe { _value: [ 10, 11, 6 ] }

// 2
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 =  v => v.map(fp.first)._value
console.log(ex2(xs)) // do

// 3
let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})
let user = {id: 2, name: "Albert"}
let ex3 = v => safeProp('name',v).map(fp.first)._value
console.log(ex3(user)) // A

// 4
let ex4 = n => Maybe.of(n).map(parseInt)._value

console.log(ex4(2.5)) // 2
console.log(ex4())    // undefined
console.log(ex4('5')) // 5