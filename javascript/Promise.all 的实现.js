/**
 * Promise
 */

Promise._all = (arr) => {
    let result = [];
    let pending = true;
    return new Promise((resolve, reject) => {
        arr.forEach((p,index) => {
            p.then(res => {
                result[index] = res;
                checkAllReady();
                if (!pending) {
                    resolve(result);
                }
            })
            .catch(err => {
                reject(err);
            })
        })
    })

    function checkAllReady() {
        for (let i in arr) {
            if (!result[i]) {
                return;
            }
        }
        pending = false;
    }
}

let p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('p1')
    }, 3000)
})

let p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('p2')
    }, 3000)
})

Promise._all([p1, p2, p1])
.then(res => {
    console.log('最终结果：' + res);
});