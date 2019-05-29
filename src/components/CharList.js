import Component from './Component.js';
import CharItem from './CharItem.js';

class CharList extends Component {

    render() {
        const list = this.renderDOM();
        
        const charItem = new CharItem({});
        list.appendChild(charItem.render());

        return list;
    }

    renderTemplate() {
        return /*html*/ `
            <ul class="list">
                
            </ul>
        `;
    }
}

export default CharList;