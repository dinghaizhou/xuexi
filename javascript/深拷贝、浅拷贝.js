// 对象浅拷贝
// 1. return {...obj}
// 2. return Object.assign({}, obj);
function copy(obj) {
    let newObj = {};
    let keys = Object.keys(obj);
    for (let key of keys) {
        newObj[key] = obj[key];
    }
    return newObj;
}
let newObj = copy({
    info: {company: 'baidu', work: null},
    list: [{title: 'title1'}, {title: 'title2'}],
    name: 'haizhou',
    age: 11
})

// 对象深拷贝
// 需要思考的问题
// 1.循环引用
// 2.函数

/**
 * @param obj[Object]
 */
function deepClone1(data) {
    // 处理循环引用
    function deepCopy(data, existObjs = []) {
        // 判断是否是引用类型， 不是直接返回 包括null
        if (typeof data !== 'object' || !data) {
            return data
        }
        existObjs.push(data);
        if (Array.isArray(data)) {
            let newArray = [];
            for (var item of data) {

                // 查找当前引用是否已经建立
                let res = existObjs.find(obj => obj === item)

                if (res) {
                    newArray.push(res)
                }
                else {
                    newArray.push(deepCopy(item, existObjs));
                }
            }
            return newArray;
        }
        else if (Object.prototype.toString.call(data) === '[object Object]') {
            let newObj = {};
            let keys = Object.keys(data);
            for (let key of keys) {
                let res = existObjs.find(obj => obj === data[key])
                if (res) {
                    newObj[key] = res;
                }
                else {
                    newObj[key] = deepCopy(data[key], existObjs);
                }
            }
            return newObj;
        }
    }

    return deepCopy(data);
}


// 最终版本
/**
 * @param obj[Object]
 */
function deepClone(data, hash = new WeakMap()) {
    let dataType = Object.prototype.toString.call(data);
    // 基本数据类型 && null && function
    if (dataType !== '[object Object]' && dataType !== '[object Array]') {
        return data;
    }

    // 新的引用对象
    let newData = Array.isArray(data) ? [] : {};

    // 存储当前对应关系,循环引用。
    hash.set(data, newData);

    for (let i in data) {
        if(data.hasOwnProperty(i)) {
            if(hash.has(data[i])) {
                console.log(true);
                newData[i] = hash.get(data[i]);
            } else {
                newData[i] = deepClone(data[i], hash);
            }
        }
    }
    return newData
}
let aa = {
    msg: {company: 'baidu', work: null},
    list: [{title: 'title1'}, {title: 'title2'}],
    name: 'haizhou',
    age: 11
}

aa.info = aa

console.log(deepClone(aa));



