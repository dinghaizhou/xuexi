/**
 * @param [Date | String] date
 * @fmt [String] fmt yyyy, MM, dd, hh, mm, ss 拼接起来的字符串
 */
function parseTime(date, fmt) {
    if (!date || !fmt) {
        return false;
    }
    
    if (typeof date === 'string') {
        date = new Date(date);
    }
    
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        return false;
    }

    let obj = {
        yyyy: date.getFullYear(),
        MM: date.getMonth() + 1,
        dd: date.getDate(),
        hh: date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds()
    }

    for(var i in obj) {
        let reg = new RegExp(i);
        fmt = fmt.replace(reg, obj[i] < 10 ? '0' + obj[i] : obj[i]);
    }
    return fmt;
}