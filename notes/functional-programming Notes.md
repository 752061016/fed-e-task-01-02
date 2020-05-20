# 函数式编程
+ 介绍
  + 为什么学函数式编程以及什么是函数式编程
  + 函数式编程的特性(纯函数、柯里化、函数组合等)
  + 函数式编程的应用场景
  + 函数式编程库 Lodash

### 为什么学函数式编程
+ 函数式编程随着React的流行受到越来越多的关注
+ Vue3也开始使用函数式编程
+ 函数式编程可以抛弃this
+ 打包过程中可以更好的利用tree shaking过滤无用代码
+ 方便测试、方便并行处理
+ 有很多库可以帮助我们进行函数式开发、ladash、underscore、ranmda

### 函数式编程概念
##### 函数式编程(Functuinal Programming)，简称FP，编程规范还有面向过程、面向对象编程
+ 函数式编程思维方式：把现实世界的事物和事物之间的联系抽象到程序世界(对运算过程进行抽象)
  + 本质：根据输入通过某种运算获得相应的输出，程序开发会涉及很多有输入输出的函数
  + x -> f(联系,映射) -> y , y=f(x)
  + 函数式编程中的函数指的不是程序中的函数(方法)，而是数学中的函数映射关系，例如 y=sin(x),x和y的关系
  + 相同的输入始终要得到相同的输出(纯函数)
  + 函数式编程用来描述数据(函数)之间的映射
```javascript
// 非函数式
let num1 = 2
let num2 = 3
let sum = num1 + num2


// 函数式
function sum(a, b) {
    return a + b
}

// 函数式编程：当输入相同时输出也相同
// 特点：可以重复使用
let num1 = sum(2, 3)
console.log(num1) // 5

let num2 = sum(2, 3)
console.log(num2) // 5

let num3 = sum(2, 3)
console.log(num3) // 5
```


### 函数是一等公民 First-class-Function
+ 函数可以存储在变量中
+ 函数可以作为参数
+ 函数可以作为返回值
因为在JavaScript中函数就是一个普通的对象(可以通过new创建)，可以把函数存储在变量中，也可以作为另一个函数的参数和返回值，也可以在程序运行时通过new来创建一个新的函数

##### 把函数赋值给变量
```javascript
// 函数可以存储在变量中
let fn = function () {
    console.log('first-class-function')
}

// 示例
const obj = {
    index (posts) {
        return View.index(posts)
    },
    show (post) {
        return View.show(post)
    }
}

// 传入的参数与返回值的函数参数相同

// 优化后 代码量减少但功能不变
const obj = {
    index: View.index,
    show: View.show
}
```
##### 函数是一等公民是后面学习的高阶函、柯里化等的基础

#### 高阶函数 Higher-order function
+ 可以把函数作为参数传递给另一个函数
```javascript
// 函数作为参数

function each(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i])
    }
}

let arr = [1, 2, 3, 4]
each(arr, function (i) {
    console.log(i) // 1 2 3 4
})

// filter
function filter(arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

filter(arr, function (i) {
    return i % 2 === 0
}) // [2, 4]
```
+ 可以把函数作为另一个函数的返回值
```javascript
// 函数可以作为返回值

function makeFn() {
    let msg = 'Hello function'
    return function () {
        console.log(msg)
    }
}

const fn = mskeFn()
fn()

makeFn()() // fn()


function once(fn) {
    let done = false
    return function () {
        if (!done) {
            // 当done被修改为true之后就无法再执行
            done = true
            return fn.apply(this, arguments)
        }
    }
}

let pay = once(function (money) {
    console.log(`支付：${money}块钱`)
})

pay(100) // 支付：100块钱
pay(100)
pay(100)
pay(100)
```
### 高阶函数的意义
+ 抽象可以屏蔽细节，只需要关注目标
+ 高阶函数是用来抽象通用的问题
+ 使代码更简洁
```javascript
// 面向过程的方式
let arr = [1, 2, 3, 4]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) // 1 2 3 4
}


// 高阶函数
function filter(arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

// 不需要考虑代码内部是怎样实现的
// 代码更加简洁
filter(arr, function (i) {
    return i % 2 === 0
}) // [2, 4]
```
### 常用的高阶函数
##### map every some
```javascript
// map

const map = (arr, fn) => {
    let result = []
    for (const value of arr) {
        result.push(fn(value))
    }
    return result
}

let arr = [1, 2, 3, 4]
arr = map(arr, v => v * v) // [1, 4, 9, 16]


// every
const every = (arr, fn) => {
    let result = true
    for (const value of arr) {
        result = fn(value)
        if (!result) {
            break
        }
    }
    return result
}

let arr2 = [11, 50, 100]
let bool1 = every(arr2, i => i > 10) // true
let bool2 = every(arr2, i => i > 20) // false


// some
const some = (arr, fn) => {
    let result = false
    for (const value of arr) {
        result = fn(value)
        if (result) {
            break
        }
    }
    return result
}

let arr3 = [1, 6, 7]
let result1 = some(arr3, i => i % 2 === 0) // true
let arr4 = [1, 3, 7]
let result2 = some(arr4, i => i % 2 === 0) // false
```
## 闭包 Closure
### 概念
+ 函数和周围的状态(词法环境)的引用捆绑在一起形成闭包
  + 可以在另一个作用域中调用一个函数的内部函数并访问到该函数的作用域中的成员
```javascript
// 函数作为返回值，且返回的函数调用了函数的变量
function mater() {
    let msg = 'hello'
    return function () {
        // 函数内没有定义msg，访问了外部函数中的msg
        console.log(msg)
    }
}

const fn = mater()
fn() // hello
```
##### 示例：once()函数
```javascript
// once 延长了外部函数变量的作用范围
function once(fn) {
    let done = false
    return function () {
        if (!done) {
            done = true
            return fn.apply(this, arguments)
        }
    }
}

let pay = once(function (num) {
    console.log(num)
})

pay(1) // 1 执行完done为true，无法再执行
pay(2) 
pay(3) 
```
+ 闭包的本质：
  + 函数在执行时会放到一个执行栈上，当执行完毕后会从执行栈中移除，但是堆上的作用域成员因为被外部引用而不能释放，因此内部函数依然可以 访问外部函数的成员

##### 示例：求数字的次方
```javascript
// 示例
function makePower (power) {
    return function (number) {
        return Math.pow(number,power)
    }
}

let power2 = makePower(2) // 平方函数
let power3 = makePower(3) // 立方函数

console.log(power2(3)) // 9
console.log(power2(4)) // 16
console.log(power3(2)) // 8

// 加成
function makeSalary (num1) {
    return function (num2) {
        return num1 + num2
    }
}

let salary1200= makeSalary(1200)
let salary3200= makeSalary(3200)

console.log(salary1200(2000)) // 3200
console.log(salary3200(1000)) // 4200
```


















