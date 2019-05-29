import Component from './Component.js';

class CharItem extends Component {

    renderTemplate() {
        return /*html*/ `
            <li class="char-item">
                <h2>46th Earth King</h2>
                <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441">
            </li>
        `;
    }
}

export default CharItem;

