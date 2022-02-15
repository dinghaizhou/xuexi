/**
 * 对比 var ,fn, let, const
 * 1.在非严格模式下，代码块中，只有使用 var 声明的变量和函数声明是可以提升的。
 * 2.不带关键字的全部变量不会提升 a = 0;
 * 3.函数提升，只会提升函数声明，而不会提升函数表达式。 区分函数表达式和函数声明
 * 4.函数提升优先级高于普通变量提升
 * 5.代码块中，使用var声明的变量和函数声明是可以提升的(存在即提升)，但是函数声明只能将函数的名字提升出去。 => test 4
 * 6.return 是函数内代码执行结束的标志，其后代码不会执行，但是提升行为却不受此限制。
 */
// 常见错误
// Cannot access 'a' before initialization  let 声明变量
// aa is not defined

console.log('---------全局变量提升---------')
function test1() {
    console.log(a);     // undefined
    //console.log(b);     // b is not defined
    //console.log(c);     // c is not defined
    fn1();              // fn1
    //fn2();              // fn2 is not a function
    var a;
    let b;
    const c = 2;
    function fn1() {
        console.log('fn1');
    }
    var fn2 = function () {
        console.log('fn2');
    }
}

// console.log('---------函数内部变量提升---------')
function test2() {
    function fn(num) {
        // var num = 2;
        console.log(num);  // [Function: num] 
        var num = 1;
        function num() {

        }
    }

    fn(2);
}

function test3() {
    function f() {
        console.log(typeof f); //function
        // var f = 3;
        f = 3;
        console.log(typeof f); //number
    };

    f();

    var s = function s() {
        console.log(typeof s); //function
        // var s = 3;
        s = 3;
        console.log(typeof s); //function 
    };

    s();
}
test3();

function test4() {
    console.log(a);

    console.log(typeof f);

    var flag = true;

    if (!flag) {
        var a = 1;
    };

    if (flag) {
        function f(a) {
            f = a;
            console.log("1");
        };
    }
    console.log(typeof f);
}

// test4()

// 作用域链 先查询当前作用域

function test5() {
    let a = 1;
    fn();
    function fn() {
        console.log(a);   // undefined
        console.log(fn)   // function
        var a = 10;
    }
}

function test6() {
    fn();
    var a = 1;
    function fn() {
        console.log(a); // undefined
    }
}

// test5()


