/**
 * 1.基本数据类型
 * number，string，boolean，undefined, null
 * 2.基本包装类型
 *    a. 创建基本类型的一个实例；
 *    b. 在实例上调用指定的方法；
 *    c. *销毁这个实例；
 *      对于基本类型（string、number、boolean），
 *      当我们读取这三种基本类型的值时，后台会创建对应的包装类型的实例，然后调用实例指定的方法，
 *      调用完就会被销毁。由于这样短暂的生命周期导致我们不能为基本类型添加自己的属性和方法。
 * 3.tyoeof 的使用方法
 * 
 */

// typeof  number，string，object，boolean，function，undefined  对应5种数据类型 + 函数
function test1() {
    console.log('typeof null', typeof null);         // object
    console.log('typeof undefined', typeof undefined);  // undefined
    console.log('typeof 1', typeof 1);          // number
    console.log('typeof "2"', typeof "2");    // string
    console.log('typeof {}', typeof {});     // object
    console.log('typeof []', typeof []);     // object
    console.log('typeof fn', typeof function fn() { });   //  function
    console.log('typeof true', typeof true);   // boolean
}

test1()

function test2() {
    let str = '1222';
    console.log(str.length);  // 4
    str.name = 1;
    console.log(str.name);   // undefined
    let str2 = new String('2121');
    console.log(str2.length);  // 4
    str2.name = 'name';
    console.log(str2.name);   // name
}

// 显示转换
