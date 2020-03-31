import compileLineItem from './compile-line-item.js';
import store from './data/store.js';
import { toUSD } from './format.js';
import techs from './data/tech.js';
import { calcOrderTotal } from './register.js';

const tbody = document.querySelector('tbody');

const shopCart = store.getShoppingCart();

for(let i = 0; i < shopCart.length; i++) {
    const lineItem = shopCart[i];

    const tech = store.getProduct(lineItem.code);
    const dom = compileLineItem(lineItem, tech);
    tbody.appendChild(dom);
    
}
const totalCell = document.getElementById('order-total-cell');

const orderTotal = toUSD(calcOrderTotal(shopCart, techs));

totalCell.textContent = orderTotal;
