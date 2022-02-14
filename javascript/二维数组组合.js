/**
 *  [['A', 'B'], ['a', 'b'], [1, 2, 3, 4]]
 *  Aa1 Aa2 ...
 */


function compose(arr) {
    function composeTwo(arr1, arr2) {
        if(arr1.length === 0) {
            return arr1;
        }
        if(arr2.length === 0) {
            return arr2;
        }

        let res = [];

        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j ++) {
                res.push(arr1[i] + '' + arr2[j]);
            }
        }
        return res;
    }

    return arr.reduce((a,b) => composeTwo(a, b));
}

console.log(compose([[ 'Aa', 'Ab', 'Ba', 'Bb' ], [1, 2, 3, 4]]));

