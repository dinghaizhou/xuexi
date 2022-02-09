/**
 * 3.12.12.121 2.12.12 3.12.22 5.12.22
 */
/**
 * 
 * @param {*} version1 
 * @param {*} version2 
 * return version1 > version2 返回 -1  version1 < version2 返回 -2
 */
// 输入 '3' '3'  输出 -1
function compareVersion(version1, version2) {
    let arr1 = String(version1).split('.');
    let arr2 = String(version2).split('.');
    if(!version1 && !version2) {
        return 0;
    }
    else if (arr1[0] > arr2[0]) {
        return 1;
    } 
    else if (arr1[0] < arr2[0]) {
        return -1;
    }
    else {
        return compareVersion(arr1.slice(1).join('.'), arr2.slice(1).join('.'))
    }
}

function sortVersion(arr) {
    return arr.sort((a,b) => compareVersion(a,b));
}

console.log(sortVersion(['1.45.0','1.5','6','3.3.3.3.3.3.3']));