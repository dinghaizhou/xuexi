### 正则知识总结

#### 创建方式

1. 字面量    var 变量名 = /表达式/模式修饰符 

2. 构造函数  var 变量名 = new RegExp(表达式, 模式修饰符 )

* 可以使用多个修饰符

#### 属性
1. 实例属性（不常用）

   描述当前正则实例
```
let reg = /aabbcc/i;
// console
reg.global  // false
reg.ignoreCase  // false
reg.source   // aabbcc
reg.lastIndex // 仿修饰符为g的时候才有
...
```
2. 静态属性

```
let reg = /aa/g;
reg.exec('abaabb');
RegExp.lastMatch ($&)  // 含有最后匹配到的字符串
RegExp.lastParen (['$+']) // 包含匹配到的最后一个子串（如果存在）
RegExp.$1-$9  // 括号匹配项是无限的, 但是RegExp对象能捕获的只有九个. 你可以通过返回一个数组索引来取得所有的括号匹配项.

```

   

#### 特殊字符

* .   匹配除换行以外的任意字符
* \d 匹配数字
* \D 匹配非数字
* \w 匹配字母
* \W 匹配非字母
* \n 匹配换行
* \b 匹配空格
* \s 匹配空白字符、空格、制表符、换行符
* \S 匹配非空白字符
* ^ 匹配开头
* $ 匹配结尾
* x? 0个或一个
* x* 0个或者多个
* x{n,m} n-m个



####  正则涉及的相关方法
##### 正则的方法
1. exec
	* 语法 regexObj.exec(str)

  ```
  // 如果匹配成功，exec() 方法返回一个数组（包含额外的属性 index 和 input），并更新正则表达式对象的 lastIndex 属性。
  	完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应正则表达式内捕获括号里匹配成功的文本（分组）。
  // 如果匹配失败，exec() 方法返回 null，并将 lastIndex 重置为 0 。
  ```

3. test

   * 语法 regexObj.test(str)
   
   ```
   // 如果正则表达式与指定的字符串匹配 ，返回true；否则false。
   // 如果正则表达式设置了全局标志，test() 的执行会改变正则表达式lastIndex属性。
   // 连续的执行test()方法，后续的执行将会从 lastIndex 处开始匹配字符串，(exec() 同样改变正则本身的 lastIndex属性值).
   ```
   
   

##### 字符串的方法
1. match


* 匹配成功 return
1.若正则表达式包含g，返回数组，数组包含匹配项
2.若不包含g，返回数组，第一项为匹配字符窜，1-n为分组，input为原始字符串，index为	匹配到的字符位于原始字符串的基于0的索引值（类似exec方法返回值）
* 匹配失败 return
null


2. replace

   str.replace(regexp|substr, newSubStr|function);
   1. regexp (pattern)
       一个RegExp 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。
   
   2. substr (pattern)
       一个将被 newSubStr 替换的 字符串。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换。
   
   3. newSubStr (replacement)
       用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的**变量名**
   
     * $$     =>     $
     * $1(n)     =>     第一个匹配组，就会用“$1(n)”替换匹配到的内容。
     * $&     =>    插入匹配的子串
     * $<name>    =>     这里*`Name`* 是一个分组名称, 匹配不上用空代替
   
     
   
   4. function (replacement)
       一个用来创建新子字符串的函数，该函数的**返回值**将替换掉第一个参数匹配到的结果。
   


3. search 

#### 命名分组

'10000元'.replace(/(?<money>\d*)元/, '¥$<money>')

表达式用(?<name>), 匹配用$<name>

#### 贪婪匹配和非贪婪匹配

*和+ 默认贪婪匹配， *？ +？惰性匹配

1. (.+)默认是贪婪匹配
2. (.+?)为惰性匹配
```
let str = '<div>test</div><div>lalala</div>';
// 贪婪匹配
let res = str.match(/\<div\>(.+)\<\/div\>/);
//res[0] => <div>test</div><div>lalala</div>
//RegExp.$1 => test</div><div>lalala

// 惰性匹配
let res = str.match(/\<div\>(.+?)\<\/div\>/);
//res[0] => <div>test</div>
//RegExp.$1 => test

```
#### 匹配配置

1. (?:pattern) 非捕获组
2. (?=pattern) 后面是pattern
3. (?!pattern) 后面不能是pattern
4. (?<=pattern) 前面是pattern
5. (?<!pattern)  前面不能是pattern
```
let str = 'aabbccbbdd';
str.match(/(?:aa)(bb)/);   	//['aabb', 'bb', index: 0, input: 'aabbccdd', groups: undefined]
str.match(/bb(?=dd)/);   		//['bb', index: 6, input: 'aabbccbbdd', groups: undefined]
str.match(/bb(?!cc)/);   		//['bb', index: 6, input: 'aabbccbbdd', groups: undefined]
str.match(/(?<=aa)bb/);   	//['bb', index: 2, input: 'aabbccdd', groups: undefined]
str.match(/(?<!aa)bb/);   	//['bb', index: 6, input: 'aabbccbb', groups: undefined]

千分号
str = '123456789';

str.replace(/\B(?=(\d{3})+($|\.))/g, ',');
配非空白字符，后面接三的倍数+结尾或.
str.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
配非空白字符，后面接三的倍数+后面不能是数字


```

