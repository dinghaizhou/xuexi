
function debounce(cb, delay) {
    let timer;
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            cb.call(this, args);
        }, delay)
    }
}

function throttle(cb, delay) {
    let disabled = false;

    return function(...args) {
        if (disabled) {
           return false;
        }
        disabled = true;

        setTimeout(() => {
            cb.apply(this, args)
            disabled =false;
        },delay)
    }
}

