import techs from '../src/data/tech.js';
import cart from '../src/data/order.js';
import { findProduct, calcLineTotal, calcOrderTotal } from '../src/register.js';
const test = QUnit.test;

QUnit.module('Register');

test('Find tech by code', assert => {
    const code = 'butter-robot';
    const expected = {
        code: 'butter-robot',
        name: 'Butter Robot',
        image: 'assets/butter-robot.png',
        description: 'Passes Butter',
        category: 'householdTech',
        price: 50.00,
        cost: 5.00
    };

    const foundProduct = findProduct(techs, code);

    assert.deepEqual(foundProduct, expected);
});

test('calculate line total', (assert) => {
    const quantity = 2;
    const price = 50.00;
    const expected = 100.00;

    const total = calcLineTotal(quantity, price);

    assert.equal(total, expected);

});

test ('calculate order total', (assert => {
    const expected = 1003470.00;

    const orderTotal = calcOrderTotal(cart, techs);

    assert.equal(orderTotal, expected);
}));