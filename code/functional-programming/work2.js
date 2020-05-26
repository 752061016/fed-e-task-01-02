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
let ex1 = fp.map(fp.add(1))
let maybe = Maybe.of([5,6,1]).map(x => ex1(x))
console.log(maybe)

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = x => fp.first(x)
console.log(xs.map(x => ex2(x)))
