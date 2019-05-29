import CharItem from '../src/components/CharItem.js';

const test = QUnit.test;

QUnit.module('displays characters');

test('renders to template from data', assert => {
    const character = {
        '_id': '5cdf0769b6e02a467e3e766b',
        'photoUrl': 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        'name': '46th Earth King'
    };

    const charItem = new CharItem({ character });
    const render = charItem.renderTemplate();


    assert.htmlEqual(render, /*html*/ `
        <li class="char-item">
            <h2>46th Earth King</h2>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441">
        </li>
    `);
});