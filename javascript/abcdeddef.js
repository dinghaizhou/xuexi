// [1a,2b,3c,3b] 找出出现字符最多的 并且数字相加的值    
let arr = ['1a', '2b', '3c', '4d', '5e', '2b']; 

function getMost(arr) {
    if (!Array.isArray(arr)) {
        return;
    }
    let tempMap = {};

    arr.forEach(item => {
        let reg = /(\d*)([a-z]*)/;
        reg.test(item);
        if (RegExp.$1 && RegExp.$2) {
            if(!tempMap[RegExp.$2]) {
                tempMap[RegExp.$2] = 0
            } 
            tempMap[RegExp.$2] = +RegExp.$1 + tempMap[RegExp.$2];
        }
    })
    return tempMap
}
console.log(getMost(arr));


// 二面abcdeddef 出现次数最多的字符和次数



