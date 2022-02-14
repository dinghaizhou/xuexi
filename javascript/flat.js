/**
 * 数组扁平化
 */

var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]], [22,3,3]];
// 1 原生flat方法
console.log(arr1.flat(Infinity));

// 2 reduce + concat + isArray + recursivity

function flatDeep(arr, d = 1) {
    return d > 0 ?
        arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
};

// flatDeep(arr1, Infinity);

// 3 forEach+isArray+push+recursivity

function flatDeep2(arr, depth = 1) {
    let result = [];

    function recur(arr) {
        if (Array.isArray(arr)) {
            arr.forEach(item => {
                recur(item);
            })
        } else {
            result.push(arr);
        }
    }

    recur(arr)
}
console.log(flatDeep2(arr1));



