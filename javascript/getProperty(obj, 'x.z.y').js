
let obj = {
    x : {
        y: {
            z: 1
        }
    }
}
function getProperty(obj, str) {
    let str2arr = str.split('.');
    let res = obj;
    str2arr.forEach(key => {
        if(res.hasOwnProperty(key)) {
            res = res[key]
        } else {
            return undefined;
        }
    })
    return res;
}

console.log(getProperty(obj, 'x.y.z.d'));