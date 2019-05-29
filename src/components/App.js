import Component from './Component.js';
import Header from './Header.js';
import Charlist from './CharList.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const charList = new Charlist({});
        main.appendChild(charList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
        
    }
}

export default App;