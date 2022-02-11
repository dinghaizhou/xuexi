// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

// 1. indexOf



/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 2. 正则
var strStr = function(haystack, needle) {
    let reg = new RegExp(needle);
    let match = haystack.match(reg);
    if(match) {
        return match.index;
    }
    return -1
};

// 3. 循环
var strStr2 = function(haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    // needle 未空的时候 直接返回0
    if(!n) return 0;
    
    for(var i = 0; i < m - n +1; i ++) {
        if(haystack[i] === needle[0]) {
            let temp = haystack.slice(i, i + n);
            if(temp === needle) {
                return i
            }
        }
    }
    return -1
};



