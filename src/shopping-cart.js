import order from './data/order.js';
import techs from './data/tech.js';
import { findProduct, calcOrderTotal } from './register.js';
import compileLineItem from './compile-line-item.js';
import { toUSD } from './format.js';
import shoppingCart from './data/order.js';

const tbody = document.querySelector('tbody');

listItems();
// calc order total

const totalCell = document.getElementById('order-total-cell');

const orderTotal = toUSD(calcOrderTotal(shoppingCart, techs));
totalCell.textContent = orderTotal;
    


function listItems() {
    for (let i = 0; i < order.length; i++) {
        const lineItem = order[i];
        const tech = findProduct(techs, lineItem.code);
        const dom = compileLineItem(lineItem, tech);
        tbody.appendChild(dom);
    }
}
// assign to total cell