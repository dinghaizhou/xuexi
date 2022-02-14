### flex 布局

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

```
    .box{
        display: inline-flex;
    }
    .box{
        display: flex;
    }
```

#### 基本概念

-   容器属性

    -   flex-direction: row ｜ column ｜ row-reverse ｜ column-reverse

    -   flex-wrap: nowrap | wrap | wrap-reverse

    -   **flex-flow**: <flex-direction> || <flex-wrap>

    -   justify-content: flex-start | flex-end | center | space-between | space-around 定义了项目在主轴上的对齐方式。

    -   align-items: flex-start | flex-end | center | baseline | stretch 定义项目在交叉轴上如何对齐。

    -   align-content: flex-start | flex-end | center | space-between | space-around | stretch 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

-   项目属性

    -   order: <number> 定义项目的排列顺序。数值越小，排列越靠前，默认为 0。
    -   flex-grow: <number> 属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。
    -   flex-shrink: <number> 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。
    -   flex-basis: 属性定义了在分配多余空间之前，项目占据的主轴空间（main size），它的默认值为`auto`，即项目的本来大小。
    -   **flex**：<flex-grow> || <flex-shrink> || <flex-basis> ，默认值为`0 1 auto`。后两个属性可选。**该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。**
    -   align-self: auto | flex-start | flex-end | center | baseline | stretch 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

-   注意两个符合属性

    flex-flow: <flex-direction> || <flex-wrap>;

    flex: <flex-grow> || <flex-shrink> || <flex-basis>;

### CSS 选择器

#### 选择器分类

-   通用选择 \*

-   id 选择器 #app

-   类选择器 .class

-   标签选择器 p

-   子选择器 > **子选择器只针对当前父级元素下的直接子元素有效**

-   子代选择器 div p

-   分组选择器 .divider, label, #setColor

-   同胞选择器 + 相邻同胞 ~ 所有同胞

#### 伪元素选择器和伪类选择器

https://www.jianshu.com/p/7bb453f1e016
https://www.jianshu.com/p/c7dcb3008e5c

##### 常见伪元素选择器

a:link，a:hover，a:visited，a:active
div:fist-child，div:last-child，div:nth-child(n)

##### 常见伪类选择器 （css2 使用一个:， css3 使用两个::）

::first-line，::fist-letter，::before，::after，::placeholder

##### 伪元素和伪类区别

伪类针对当前已经存在类，添加样式。

伪元素真对已经存在某个元素，如 fist-letter，或者新建一个元素，添加样式。

#### 选择器优先级排序

##### 单个比较

id > 类 > 标签

##### 组合比较方法： 从前往后比较数目

1（id 选择器数），3（类选择器数），0（标签选择器数）
1（是否行内），2（id 选择器数），3（类选择器数），0（标签选择器数）

### CSS 动画

#### transition

-   transition-origin: center(默认值);
    /_ x-offset | y-offset _/  
     transform-origin: top left;
    /_ x-offset | y-offset | z-offset _/
    transform-origin: 2px 30% 10px;

#### transition

-   拆分
    transition-property: height;
    transition-duration: 1s;
    transition-delay: 1s;
    transition-timing-function: ease;
-   组合
    transition: 1s all ease 2s;

#### animation

* animation-delay: 1s;
* animation-deirection: normal | reverse | alternate | alternate-reverse;
* animation-name: 关键帧名称
* animation-delay: 1s 设置延时，
* animation-iteration-count  设置动画重复次数， 可以指定infinite无限次重复动画

#### @keyframe
```
@keyframe fadein {
    from {
        // 0%
    }
    10% {
        
    }
    to {
        // 100%
    }
}
```