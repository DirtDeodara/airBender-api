import Component from './Component.js';
import Header from './Header.js';
import Charlist from './CharList.js';
import charApi from '../services/char-api.js';
import Loading from './Loading.js';


class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const charList = new Charlist({ characters: [] });
        main.appendChild(charList.render());

        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());

        
        function loadCharacters() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const allegiance = searchParams.toString();

            loading.update({ loading: true });

            charApi.getChars(allegiance)
                .then(characters => {
                    charList.update({ characters });
                })
                
                .finally(() => {
                    loading.update({ loading: false });
                });
        }

        loadCharacters();

        window.addEventListener('hashchange', () => {
            loadCharacters();
        });


        charApi.getChars()
            .then(characters => {
                charList.update({ characters });
            })

            .finally(() => {
                loading.update({ loading: false });
            });

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