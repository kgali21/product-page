import compileLineItem from './compile-line-item.js';
import store from './data/store.js';

const tbody = document.querySelector('tbody');

const cart = store.getShoppingCart();

for(let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];

    const tech = store.getProduct(lineItem.code);
    const dom = compileLineItem(lineItem, tech);
    tbody.appendChild(dom);
    
}