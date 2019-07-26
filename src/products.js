import store from './data/store.js';
import compileTech from './compile-tech.js';

const list = document.getElementById('tech');

const techs = store.getProducts();

for(let i = 0; i < techs.length; i++){
    const tech = techs[i];
    const dom = compileTech(tech);
    list.appendChild(dom);
}