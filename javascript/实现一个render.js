// var obj = {name:"二月",age:"15"};
// var str = "{{name}}很厉害，才{{age}}岁";
// 输出：二月很厉害，才15岁。

function render(str, obj) {
    let reg = /\{\{(.*?)\}\}/g
    return str.replace(reg, (res, p1) => {
        return obj[p1];
    });
}

console.log(render("{{name}}很厉害，才{{age}}岁", {name:"二月",age:"15"}));
