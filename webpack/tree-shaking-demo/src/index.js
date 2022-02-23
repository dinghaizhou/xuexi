import {cube} from './math.js';
import {add} from './test.js';

function component() {
    const element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5),
        add(2,3)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());