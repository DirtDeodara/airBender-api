const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const charApi = {
    getChars(allegiance) {
        if(allegiance) {
            const allegianceURL = `https://last-airbender-api.herokuapp.com/api/v1/characters?${allegiance}`;
            return fetch(allegianceURL)
                .then(response => response.json());
        }
        return fetch(URL)
            .then(response => response.json());
    }
};

export default charApi;