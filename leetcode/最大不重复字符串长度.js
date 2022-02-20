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

    while(p2 < str.length) {
        let temp = str.slice(p1, p2);
        if(temp.indexOf(str[p2]) > -1) {
            res = p2 - p1 > res ? p2 - p1 : res;
            p1++;
            p2 = p1
        }
        p2 ++
    }
    return p2 - p1 > res ? p2 - p1 : res;
}

console.log(calcMaxlength('abdcaefgztcdabc'))