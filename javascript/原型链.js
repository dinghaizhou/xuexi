/**
 * 原型链
 * 构造函数 -> prototype属性 -> 原型对象 -> Constructor -> 构造函数
 * 普通对象 -> __proto__ -> 原型对象 -> __proto__ -> 上层原型对象 -> ... -> 
 */

/**
 * 1. instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 * 2. hasOwnProperty() 是否存在实例属性
 * 3. isPrototypeOf 判断proptotype对象和某个实例之间的关系。
 */

/* ES5 继承三种方法
* 构造函数继承   缺点：无法继承父类原型方法
* 原型链继承   缺点： 无法继承父类实例属性
* 组合继承（combination inheritance）,有时候也叫伪经典继承，
* 指的是将原型链和借用构造函数的技术组合到一块，从而返回二者之长的一种继承模式。
* 其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
* 这样，既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性。
*/
function Animal() {
    this.species = "动物";
}
Animal.prototype.bark = () => {
    console.log('动物叫唤');
}



// 构造函数绑定
function Cat(name, color) {
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}

var cat1 = new Cat("咖啡","黑白");

// console.log(cat1 instanceof Cat); //true

// 原型链继承
function Dog(name, color) {
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
Dog.prototype = Animal.prototype;

Dog.prototype.constructor = Dog;

var dog1 = new Dog("大毛","黄色");
console.log(dog1)
console.log(dog1 instanceof Dog);