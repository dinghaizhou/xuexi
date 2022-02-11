// 类型注解
let var1:string;
// var1 = undefined; error

// 类型推论
const var2 = true;
// var2 = 111;  errors

// 原始类型 string,number,boolean,undefined,null,symbol
let var3: string | undefined;

// 类型数据
let arr:string[];
// arr = [1,'44','44'];

// 任意类型
let varAny:any;
varAny = 1;
varAny = 2;
let arrArray:any[];

// 函数类型约束
function greet(person: string):string {
  return 'hello,' + person;
}
const msg = greet('haizhou');

function warn(person: string):void {
  
  // return 'hello,' + person;
}

// 对象object, 不是原始类型的都是对象类型

// 不规范
function fn1(obj: object) {
}
fn1([])

// 约束参数
function fn2(obj: {props: number}) {
}

fn2({props: 1})
// fn2({props: '222'}) // no ok


// 类型别名 type， 自定义类型 
// 等同于fn2
type Prop = {prop: number}
function fn3(obj: Prop) {

}

// type 和 interface 的区别， 基本相同
interface Prop2 {
  prop: number
}


// 类型断言
const someValue:any = 'this is a string'
const stringLength = (someValue as string).length



// 联合类型 相当于 或 语句
let union: string | number;


// 交叉类型 主要作用扩展类型
type First = {
  first: number
}
type Second = {
  second: number
}

type FirstAndSecond = First & Second

function fn4(): FirstAndSecond {
  return {first: 1, second: 2}
}


// 函数的使用
// 1. 参数设置了就是必填参数
// 2. 默认值
// 3. 可选参数
function greeting(person: string, msg = "abc", num?:string ) {
  return ''
}

greeting('tom')

// 函数重载
// 先声明(定义)，后实现
function watch(num: number): void;
function watch(num: string): void;

function watch(num: any): void {

}