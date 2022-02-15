let obj = {
    foo: 1,
    bar: 'bar'
}
// 原型属性
obj.__proto__.baz = 'baz';

// 不可以枚举
Object.defineProperty(obj, 'dong', {
    value: 3,
    enumerable: false
})

for (var i in obj) {
    console.log(i); // foo, bar, baz
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj))
console.log(obj.hasOwnProperty('baz'));
console.log('dong' in obj);
/**
 * 总结 
 * for in  包含对象自身的可枚举的所有属性和原型方法
 * Object.keys() 可枚举的、非原型
 * Object.getOwnPropertyNames(obj)  对象自身的所有属性（包含不可枚举属性）
 *
 */

/**
 *  obj.hasOwnProperty('baz') 检测是否是原型属性  可以和 for in 配合使用
 */