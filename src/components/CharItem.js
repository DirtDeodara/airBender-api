import Component from './Component.js';

class CharItem extends Component {

    renderTemplate() {
        const character = this.props.character;
        return /*html*/ `
            <li class="char-item">
                <h2>${character.name}</h2>
                <img src="${character.photoUrl}">
            </li>
            
        `;
    }
}

export default CharItem;

