let obj = {
    foo: 'foo',
    bar: {
        baz: 'baz'
    }
}

// 只处理对象
function observer(target) {
    if (Object.prototype.toString.call(target) !== '[object Object]') {
        return;
    }

    let keys = Object.keys(target);

    for(let key of keys) {
        defineReactive(target, key);
    }
}

class Dep {
    constructor() {
        this.deps = [];
    }
    add(dep) {
        this.deps.push(dep);
    }
    nodtify() {
        this.deps.forEach(cb => cb());
    }
}

function defineReactive(obj, key) {
    let dep = new Dep();
    let newValue = obj[key];
    Object.defineProperty(obj, key, {
        set(value) {
            newValue = value;
            // 通知变化
            dep.nodtify();
        },
        get() {
            // 依赖收集
            dep.add(() => {
                console.log('更新foo');
            });
            return newValue
        }
    })
}

observer(obj);
obj.foo 
obj.foo = '124'
console.log(obj.foo);

// new Watcher();



// class Watcher {
//     constructor(vm, key, updateFn) {
//         this.vm = vm;

//         Dep.target = this;
//         this.vm[key]
//         Dep.target = null
//     }
//     update() {

//     }
// }

