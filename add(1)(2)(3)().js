/**
 * @description 
 * @param num[Number]
 * @returns [Function]
 */

// 记录和
function add(num) {
    let sum = num;
    if(!num) {
        return sum;
    }

    function fn(num) {
        if(num) {
            sum += num
            return fn;
        } else {
            return sum
        }
    }

    fn.valueOf = function() {
        return sum;
    }

    return fn;
}

// 记录参数
function add2 () {
    let args = Array.from(arguments);
    console.log(args);
    if(args.length === 0) {
        return 0
    }

    function fn(num) {
        if (num) {
            return add2.apply(null, args.concat(num));
        } else {
            return args.reduce((a,b) => a + b);
        }
    }

    fn.valueOf = function() {
        return args.reduce((a,b) => a +b);
    }
    return fn
}


