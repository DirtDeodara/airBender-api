import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/ `
            <header>
                <h1>The Last Airbender</h1>
                <a id="get-all-link" href="">Get All Characters</a>
            </header>
        `;
    }
}

export default Header;