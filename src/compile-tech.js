import { toUSD } from './format.js';
import store from './data/store.js';

function compileTech(tech) {
    const li = document.createElement('li');
    li.className = tech.category;
    li.title = tech.description;

    const h3 = document.createElement('h3');
    h3.textContent = tech.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = tech.image;
    img.alt = tech.name + ' image';
    li.appendChild(img);

    const p = document.createElement('price');
    p.className = 'price';

    const usd = toUSD(tech.price);

    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = tech.code;
    button.addEventListener('click', () => {
        store.orderProduct(tech.code);
    });

    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default compileTech;
