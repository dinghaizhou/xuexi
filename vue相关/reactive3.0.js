// proxy

function isObject(data) {
    return typeof data === 'object' && data;
}
// 存放已经处理过的原始对象
let toRefs = new WeakMap();
// 存放已经处理过的响应式对象
let toRaw = new WeakMap();
// 响应栈
let effectStack = [];

function reactive(obj) {
    if (!isObject(obj)) {
        return obj;
    }

    // 判断是否已经代理过
    if (toRefs.has(obj)) {
        return toRefs.get(obj);
    }
    // 传入对象已经是代理过的
    if (toRaw.has(obj)) {
        return obj;
    }
    
    console.log('开始代理');
    let observed = new Proxy(obj, {
        get(target, key) {
            console.log('get:' + key);
            track(target, key);
            const res = Reflect.get(target, key);
            return res;
        },
        set(target, key, value) {
            console.log('set:' + key + ';value:' + value);
            Reflect.set(target, key, value);
            trigger(target, key);
        },
        deleteProperty(target, key) {
            console.log('delete:' + key);
            Reflect.deleteProperty(target, key);
        }
    })

    toRefs.set(obj, observed);
    toRaw.set(observed, obj)
    return observed;
}

// 存放依赖关系
// {target: {key1: [], key2: [] }}
let targetMap = new WeakMap();

// 添加依赖
function track(target, key) {
    let effect = effectStack[effectStack.length - 1];
    if (!effect) {
        return;
    }

    let depsMap = targetMap.get(target)
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }

    let deps = depsMap.get(key);
    if (!deps) {
        deps = new Set();
        depsMap.set(key, deps);
    }

    deps.add(effect);
}

// 执行依赖
function trigger(target, key) {
    let effectSet = targetMap.get(target).get(key);
    effectSet.forEach(cb => cb())
}

// 响应式函数
function effect(fn) {
    effectStack.push(fn);
    fn()
    effectStack.pop();
}

let data = {
    foo: 'foo',
    bar: {
        baz: 'baz'
    },
    dong: [1, 2, 3, 4]
}
let reactiveData = reactive(data);
// reactiveData.dua = '111';

effect(() => {
    console.log('foo change1:' + reactiveData.foo)
})
effect(() => {
    console.log('foo change2:' + reactiveData.foo)
})
reactiveData.foo = '1212232323';
