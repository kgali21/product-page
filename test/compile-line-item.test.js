import techs from '../src/data/tech.js';
import { findProduct } from '../src/register.js';
import compileLineItem from '../src/compile-line-item.js';

const test = QUnit.test;

QUnit.module('Compile Line Item');

test('compiles a line item', assert => {
    const lineItem = {
        code: 'plumbus',
        quantity: 1,
    };
    const plumbus = findProduct(techs, lineItem.code);
    const expected = '<tr><td class="align-left">Plumbus</td><td>1</td><td>$20.00</td><td class="line-item-total">$20.00</td></tr>';

    const dom = compileLineItem(lineItem, plumbus);
    const html = dom.outerHTML;

    assert.equal(html, expected);

});