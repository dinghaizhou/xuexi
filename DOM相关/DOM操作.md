# HTML DOM对象

### el.classList 获取dom元素class列表

* length    返回类列表中类的数量

* add(class1, class2,...)  在元素中添加一个或多个类名。

* contains(class) 	返回布尔值，判断指定的类名是否存在。

* item(index) 返回元素中索引值对应的类名。索引值从 0 开始。

* remove(class1, class2,...) 移除元素中一个或多个类名。 

* toggle(class, true|false) 在元素中切换类名。

### el.dataset 获取Dom自定义属性

```
<div data-is-mine="1"> </div>  
获取（驼峰写法） el.dataset.isMine  值为字符串
设置 el.dataset.isMine = null 

```

### el.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。

#### 属性




# HTML API

### IntersectionObserver

