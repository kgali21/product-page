import store from '../src/data/store.js';
import techs from '../src/data/tech.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});


test('get and save', assert => {
    const key = 'mouse';
    const mouse = { name: 'mickey' };

    store.save(key, mouse);
    const got = store.get(key);

    assert.deepEqual(got, mouse);
});

test('get bootstrapped data', (assert) => {
    const products = store.getProducts();

    assert.deepEqual(products, techs);

});

test('get shopping cart data', (assert) => {
    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, []);

});

test('product code adds to shopping cart', (assert) => {
    const code = 'plumbus';
    const expected = [{
        code: 'plumbus',
        quantity: 1,
    }];

    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, expected);

});

test('product code to shopping cart', (assert) => {
    const code = 'plumbus';
    const expected = techs[0];

    const tech = store.getProduct(code);

    assert.deepEqual(tech, expected);
});