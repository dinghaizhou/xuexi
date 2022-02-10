let data = {
    foo: 'foo',
    bar: {
        baz: 'baz'
    },
    dong: [1,2,3,4]
}

// Proxy, Reflect

function isObject(data) {
    return typeof data === 'object'
}

function observe(obj) {
    if(!isObject(obj)) {
        return obj;
    }

    let observed = new Proxy(obj, {
        set(target, key, value) {
            console.log('set:' + key + ';value:' + value);
            trigger();
            return Reflect.set(target, key, value);
        },
        get(target, key) {
            console.log('get:' + key);
            track();
            return observe(Reflect.get(target, key));
        },
        deleteProperty(key) {
            console.log('delete:' + key);
            console.log('deleteProperty');
        }
    })
    return observed;
}



let observedObj = observe(data);

observedObj.dong.reverse();