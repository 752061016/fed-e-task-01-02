# 简答题
## 1.描述引用计数的工作原理和优缺点
+ 优点：
  + 在元素的引用数为0时能立即回收
  + 能够最大程度地减少程序暂停
+ 缺点：
  + 若有元素被循环引用，那么引用数永远不会为0，也永远不会被回收
  + 花费的时间较多
## 2.描述标记整理算法的工作流程
+ 回收前：标记所有可达对象为标记活动对象
+ 整理：将所有的标记活动对象进行移动整理，整理到连续的位置
+ 回收：将整理完后的非活动对象进行回收，回收相应的空间，放在空闲列表上，方便程序可以在这申请空间使用
## 3.描述V8中新生代存储器垃圾回收的流程
+ 新生代内存分成了两个等大的空间，分别为使用空间From和等闲空间To
+ 标记所有From空间内的可达对象并整理到连续的位置
+ 将From空间内所有的可达对象进行复制，拷贝到To空间中
+ From空间和To空间交换空间完成释放
+ 若一轮垃圾回收还存活的新生代或To空间使用率超过25%则需要晋升，晋升会将新生代对象移动到老生代中
## 4.描述增量标记算法在何时使用及工作原理
+ 使用：在V8老生代对象的垃圾回收标记时使用
+ 工作原理：增量标记可以不用一次性标记完所有的可达对象，程序运行与标记交替执行，每次标记一部分可达对象，等完全标记完可达对象后再进行垃圾回收操作
# 代码题1
## 基于以下代码完成下面的四个练习
```javascript
const fp = require('lodash/fp')

const cars = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
]
```
## 练习1
### 使用函数组合fp.flowRight()重新实现下面这个函数
```javascript
let isLastInStock = function (cars) {
    // 获取最后一条数据
    let last_car = fp.last(cars)
    // 获取最后一条数据的in_stock属性值
    return fp.prop('in_stock', last_car)
}
```
```javascript
// 定义getInStock方法为获取对象中的in_stock属性
let getInStock = fp.prop('in_stock')
// 使用fp.flowRight组合fp.last和getInStock方法，接受一个数组，找到数组中的最后一条数据的in_stock属性
let isLastInStock = fp.flowRight(getInStock,fp.last)
console.log(isLastInStock(cars)) // false
```
## 练习2
### 使用fp.flowRight(),fp.prop()和fp.first()获取第一个car的name
```javascript
// 定义getName方法为获取对象中的name属性
let getName = fp.prop('name')
// 使用fp.flowRight组合fp.first和getName方法，接受一个数组，找到数组中的第一条数据的name属性
let getFirstName = fp.flowRight(getName,fp.first)
console.log(getFirstName(cars)) // Ferrari FF
```
## 练习3
### 使用帮助函数_average重构averageDollarValue，使用函数组合的方式实现
```javascript
let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length
} // 无须改动

let averageDollarValue = function (cars) {
    let dollar_value = fp.map(function (cars) {
        return cars.dollar_value
    }, cars)
    return _average(dollar_value)
}
```
```javascript
// averageDollarValue方法为以数组形式输出cars数组中的dollar_value属性，并作为参数执行_average方法
// 定义getDollarValue方法为获取对象中的dollar_value属性
let getDollarValue = fp.prop('dollar_value')
// 接受一个数组，遍历数组输出dollar_value属性，并与_average方法组合到一起
let averageDollarValue = fp.flowRight(_average, fp.map(getDollarValue))
console.log(averageDollarValue(cars)) // 790700
```

## 练习4
### 使用flowRight写一个sanitizeNames()函数，返回一个下划线连接的小写字符串，把数组中的name转换成这种形式：例如：sanitizeNames(["Hello World"]) => ["hello_wirld"]
```javascript
let _underscore = fp.replace(/\W+/g, '_') // 无须改动，并在sanitizeNames中使用它
```
```javascript
// 定义getName方法为获取对象中的in_stock属性
let getName = fp.prop('name')
// 使用fp.map对数组进行遍历操作，将getName,_underscore,fp.toLower三个方法组合一起作为遍历操作
// 接受一个数组，遍历数组每个对象，使用getName获取name属性，再使用_underscore将空格替换成_,最后将字母小写并返回
let sanitizeNames = fp.map(fp.flowRight(fp.toLower,_underscore,getName))
console.log(sanitizeNames(cars)) // ['ferrari_ff','spyker_c12_zagato','jaguar_xkr_s','audi_r8','aston_martin_one_77','pagani_huayra']
```

# 代码题2
## 基于下面提供的代码，完成后续的四个练习
```javascript
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
module.exports = {
    Maybe,
    Container
}
```
## 练习1
### 使用fp.add(x,y)和fp.map(f,x)创建一个能让functor里的值增加的函数ex1
```javascript
const fp = require('lodash/fp')
const {Maybe, Container} = require('./support')

let maybe = Maybe.of([5, 6, 1])
```
```javascript
// ex1接受一个参数，返回一个函数，函数接受一个数组并遍历数组为数组每个值加上参数的值
let ex1 = num => v => v.map(fp.map(fp.add(num)))
// 定义一个为数组内的值加5的函数
let ex1_5 = ex1(5)
console.log(ex1_5(maybe)) // Maybe { _value: [ 10, 11, 6 ] }
```
## 练习2
### 实现一个函数ex2，能够使用fp.first获取列表的第一个元素
```javascript
const fp = require('lodash/fp')
const {Maybe, Container} = require('./support')

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
```
```javascript
// ex2接受一个Container对象遍历_value的值并将第一个值作为创建新的Container对象的参数，最后输出新的Container对象的_value值
let ex2 =  v => v.map(fp.first)._value
console.log(ex2(xs)) // do
```
## 练习3
### 实现一个函数ex3，使用safeProp和fp.first找到user的名字的首字母
```javascript
const fp = require('lodash/fp')
const {Maybe, Container} = require('./support')

let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})
let user = {id: 2, name: "Albert"}
```
```javascript
// safeProp方法将对象中的name属性作为创建Maybe对象的参数并返回Maybe对象
// 为Maybe对象添加方法 fp.first 找到字符串的首字母作为创建新的Maybe对象的参数并返回
// 最后返回新的Maybe对象的_value值，也就是对象的name属性的首字母
let ex3 = v => safeProp('name',v).map(fp.first)._value
console.log(ex3(user)) // A
```
## 练习4
### 使用Maybe重写ex4，不要有if语句
```javascript
const fp = require('lodash/fp')
const {Maybe, Container} = require('./support')

let ex4 = function (n) {
    if (n) { return parseInt(n) }
}
```

```javascript
// ex4接受一个参数作为创建Maybe对象的参数
// 为Maybe对象添加parseInt处理_value值
// map处理前会使用Nothing方法判断是否为空值，若是空值则不执行回调直接返回
// 将处理后的值作为创建新的Maybe对象的参数，最后返回新的Maybe对象的_value
let ex4 = n => Maybe.of(n).map(parseInt)._value

console.log(ex4(2.5)) // 2
console.log(ex4())    // undefined
console.log(ex4('5')) // 5
```
### 代码题源码在：code/work 文件夹中