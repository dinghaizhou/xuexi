// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

/**
 * @description 字符窜反转
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    // 拆成数组
    let arr = String(x).split('');
    
    // 反转
    arr.reverse();

    // 拼接
    let reverseStr = arr.join('');
    // 比较
    return reverseStr === String(x);
};

/**
 * @description 不转string ✅✅✅
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
    let revertNumber = 0;
    // 等于零返回true
    if(x === 0) {
        return true;
    }
    // 负数或者尾数为0，返回true
    if (x % 10 === 0 || x < 0) {
        return false
    }
    while(x) {
        revertNumber = revertNumber * 10 + x % 10;
        x = Math.floor(x / 10);
        if (x === revertNumber || Math.floor(x/10) === revertNumber) {
            return true
        }
    }
    return false;
};


/**
 * @description for循环
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome3 = function(x) {
    let str = String(x);

    // 中间元素index
    let index = Math.floor(str.length / 2);

    for(let i = 0; i < index; i++){
        // 首位标 出现不相等返回false
        if(str[i] !== str[str.length - 1]) {
            return false
        }

    }

    return true;
};

console.log(isPalindrome3(121));



