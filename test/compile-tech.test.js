import compileTech from '../src/compile-tech.js';

const test = QUnit.test;

QUnit.module('Compile Tech');

test('compiles tech', assert => {

    const plumbus = {
        code: 'plumbus',
        name: 'Plumbus',
        image: 'assets/plumbus.png',
        description: 'An all purpose device',
        category: 'householdTech',
        price: 20.00,
        cost: 5.00
    };
    const expected = '<li class="householdTech" title="An all purpose device"><h3>Plumbus</h3><img src="assets/plumbus.png" alt="Plumbus image"><price class="price">$20.00<button value="plumbus">Add</button></price></li>';

    const dom = compileTech(plumbus);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});