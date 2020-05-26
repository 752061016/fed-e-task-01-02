function Person() {
    this.mame = 'lg'
    this.age = 25
    this.getAge = function () {
        return this.age
    }
}

const p1 = new Person()
const a1 = p1.getAge()

// 所有的属性都是外部可见的，都可直接访问
// 性能有所提高，不建议添加属性访问方法
function Person2() {
    this.mame = 'lg'
    this.age = 25
}

const p2 = new Person2()
const a2 = p2.age