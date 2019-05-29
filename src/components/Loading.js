import Component from '../components/Component.js';

class Loading extends Component {

    renderTemplate() {
        const loading = this.props.loading;
        if(!loading) {
            return '<div></div>';
        }
        return /*html*/ `
            <div class="loading">
                <img id="spinner" src="../../assets/spinner.gif">
            </div>
        `;
    }
}

export default Loading;