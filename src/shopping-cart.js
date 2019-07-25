// import cart from './data/order.js';
// import techs from './data/tech.js';
// import { findProduct, calcOrderTotal } from './register.js';
import compileLineItem from './compile-line-item.js';
// import { toUSD } from './format.js';
import store from './data/store.js';

const tbody = document.querySelector('tbody');

const cart = store.getShoppingCart();

for(let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    console.log(lineItem);
    // const tech = findProduct(techs, lineItem.code);
    const tech = store.getProduct(lineItem.code);
    console.log(tech);
    const dom = compileLineItem(lineItem, tech);
    tbody.appendChild(dom);
    console.log('dom' + dom);
    
}


// const totalCell = document.getElementById('order-total-cell');

// const orderTotal = toUSD(calcOrderTotal(cart, techs));
// totalCell.textContent = orderTotal;
