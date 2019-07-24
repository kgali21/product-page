import order from './data/order.js';
import { findProduct } from './register.js';
import techs from './data/tech.js';
import compileLineItem from './compile-line-item.js';

const tbody = document.querySelector('tbody');

for(let i = 0; i < order.length; i++) {
    const lineItem = order[i];
    const tech = findProduct(techs, lineItem.code);
    const dom = compileLineItem(lineItem, tech);

    tbody.appendChild(dom);
}

// calc order total

// assign to total cell