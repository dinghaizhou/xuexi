/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function (s) {
    let leftArr = ['(', '[', '{'];
    let map = {
        '}': '{',
        ']': '[',
        ')': '(',
    }
    let tempArr = [];

    for (var i in s) {
        if(leftArr.indexOf(s[i]) > -1) {
            tempArr.push(s[i]);
        } else {
            if(tempArr.length === 0) {
                return false
            }
            let lastEle = tempArr.pop();
            if (lastEle !== map[s[i]]) {
                return false
            }
        }
    }

    if (tempArr.length) {
        return false
    }
    return true
};

console.log(isValid('(]'));

