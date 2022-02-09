/**
 * function.prototype.call(obj, arg1, arg2);  执行
 * function.prototype.bind(obj, [arg1, arg2]); 执行
 * function.prototype.apply(obj, [arg1, arg2]); 包装
 * 重点说明bind
 * 1.bind返回一个函数
 * 2.new 操作符
 */

// // 实现call方法
// Function.prototype._call = function(context, ...args) {
//     context.fn = this;
//     // 返回执行结果
//     let res = context.fn(...args);
//     // 删除上下文的fn
//     delete context.fn;
//     return res;
// }

// // 实现apply
// Function.prototype._apply = function(context, args) {
//     context.fn = this;

//     // 返回执行结果
//     let res = context.fn(...args);
//     // 删除上下文的fn
//     delete context.fn;
//     return res;
// }
// // 实现bind

/**
 * 1. 简单实现
 * 2. 可以 new
 * 3. 多次bind (原生)
 */

Function.prototype._bind = function(context, ...args) {
    // 储存初始fn
    var func = this.__bind__ || this;
    var returnFunc = function() {
        args = args.concat(Array.prototype.slice.call(arguments))
        console.log(context);
        console.log(this instanceof returnFunc);
        return func.apply(this instanceof returnFunc ? this : context, args)
    }
    // 储存初始fn函数
    // returnFunc.__bind__ = func;
    returnFunc.prototype = func.prototype

    return returnFunc
}
  

let people = {name: 'haizhou'};

function fn(name, age, gender) {
    console.log(this.name);
    // this.name = name
    // this.gender = gender;
    // this.age = age;
    console.log(`姓名${this.name}, 年龄${age}岁, 性别${gender}`);
}

let foo = fn._bind({name: '1'})._bind({name: '2'});

console.log(foo())




