/**
 * forEach([], cb)
 */

// function forEach(arr, cb) {
//     let i = -1;
//     function next() {
//         i++;
//         if(i === arr.length) {
//             return;
//         }
//         let res = cb(arr[i]);
//         cb(arr[i]).then((res) => {
//             // 处理res
//             next()
//         })
//     }
//     next();
// }

async function forEach() {
    function test() {
        return 2
    }
    let res = await test()
    console.log(res)
}
forEach();
