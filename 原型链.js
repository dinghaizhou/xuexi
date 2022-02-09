/**
 * 构造函数 -> prototype属性 -> 指向原型对象 -> Constructor -> 构造函数
 * 普通对象 -> __proto__ -> 原型对象 -> __proto__ -> 上层原型对象 -> ... -> 
 * 
 * 
 */

class Father {
    constructor(name) {
        this.name = name
    }

    eat() {

    }
} 

class Son extends Father {
    learn() {

    }
}
/**
 * instanceOf
 */