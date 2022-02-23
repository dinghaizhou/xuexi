// abcabcdabacad  => 4
// '' => 0
// aaaa => 1
// abc => 3
function calcMaxlength(str) {

    if(!str) {
        return 0;
    }

    let p1 = 0;
    let p2 = 1;
    let res = 1;
    let temp = str[0]
    
    while(p2 < str.length) {
        console.log(temp);
        if(temp.indexOf(str[p2]) > -1) {
            res = Math.max(p2 - p1, res);
            p2 = ++p1 + 1;
            temp = str[p1];
        } else {
            temp += str[p2];
            p2++;
        }
    }

    return Math.max(p2 - p1, res);
}

console.log(calcMaxlength('abdcaefgztcdabc'))