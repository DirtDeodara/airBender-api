import Component from './Component.js';

class CharItem extends Component {

    renderTemplate() {
        const character = this.props.character;

        const enemyLink = new URLSearchParams();
        enemyLink.set('enemies', character.name);
        
        const allyLink = new URLSearchParams();
        allyLink.set('allies', character.name);

        if(!character.photoUrl) {
            character.photoUrl = 'https://vignette.wikia.nocookie.net/skies-of-arcadia/images/e/e4/Avatar_The_Last_Airbender_logo_%28alternate_version%29.png/revision/latest?cb=20180224144932';
        }
        
        return /*html*/ `
            <li class="char-item">
                <h2>${character.name}</h2>
                <img src="${character.photoUrl}">
                <a href="#${enemyLink.toString()}">Enemies</a>
                <a href="#${allyLink.toString()}">Allies</a>
            </li>
            
        `;
    }
}

export default CharItem;

