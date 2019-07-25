import { calcLineTotal } from './register.js';
import { toUSD } from './format.js';


function compileLineItem(lineItem, tech) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = tech.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);
    
    if(!tech.price){
        console.log(tech);
    }
    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(tech.price);
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = calcLineTotal(lineItem.quantity, tech.price);
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;
}
export default compileLineItem;