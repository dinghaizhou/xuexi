function _setTimeout(delay) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove()
        },delay)
    })
}
_setTimeout(1000).then(() => {
    console.log(2000);
})

