#  Set

#### 1. 使用

```
let set = new Set([1,2,3,3]);
```

* Set 结构不会添加重复的值。
  * 多个NaN视为相等（和===不一样），多个{}视为相等，'5' 和 5视为相等
* 参数为一个数组（或者具有 iterable 接口的其他数据结构）

### 2. 实例方法及属性

```
// 属性
Set.prototype.size				// 总数
Set.prototype.construtor 	// Set

Set.prototype.add().add()				// 返回自身，链式调用
Set.prototype.delete()   // 返回boolean,表示删除是否成功。
Set.prototype.has(value) // 返回一个布尔值，表示该值是否为Set的成员。
Set.prototype.clear()    // 清除所有成员，没有返回值。

// 遍历（具有 iterable 接口）
Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
//
Set.prototype.keys()：返回键名的遍历器 
Set.prototype.values()：返回键值的遍历器, 
Set.prototype.entries()：返回键值对的遍历器
...
for ... of
Set.prototype.forEach()：使用回调函数遍历每个成员

```

###  3. 应用

```
// 去除数组的重复成员
[...new Set(array)]
// 字符串
[...new Set('ababbc')].join('')
// 并集
let union = new Set([...a, ...b]);
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));

```
###  4. 其他

* `Array.from`方法可以将 Set 结构转为数组。

#  WeakSet
#### 1. 使用

```
const ws = new WeakSet([[12,44], [22,222]]);
```

* 不能添加重复的值。

* WeakSet 的成员只能是对象

* WeakSet不可遍历，没有size属性
#### 2.实例方法和属性
```
WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在

// 没有size，不能遍历。临时存放。
ws.size // undefined
ws.forEach // undefined
```
#### 3. 其他
* **WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用**

# Map
#### 1.使用

##### Map 和 Object 对比

* 传统对象只能使用字符串作为key，如果使用对象作为key的话，回被调用Object.prototype.toString() 转为string(类似'[object Array]')

* Map也是键值对结构，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。

##### 构造函数使用


```
// 直接传入数组 二维数组
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

// 先创建实例，再添加
const items = [
  ['name', '张三'],
  ['title', 'Author']
];

const map = new Map();

items.forEach(
  ([key, value]) => map.set(key, value)
);
```

#### 2.实例方法和属性

```
size 属性
Map.prototype.set(key, value) // key取值任意
Map.prototype.get(key)  // 取不到返回undefined
Map.prototype.has(key)  // has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
Map.prototype.delete(key)
Map.prototype.clear()

// 遍历
Map.prototype.keys()：返回键名的遍历器。
Map.prototype.values()：返回键值的遍历器。
Map.prototype.entries()：返回所有成员的遍历器。
Map.prototype.forEach()：遍历 Map 的所有成员。


```

#### 3.[各种转换](https://es6.ruanyifeng.com/?search=map&x=0&y=0#docs/set-map)




# Map
#### 1. Map 和 WeakMap

* WeakMap 只接受对象作为key， null 除外
* WeakMap的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。



